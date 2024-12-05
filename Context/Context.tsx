import { createContext, useContext, useEffect, useState } from "react";
import MaterialAlert from "../src/Components/MaterialAlert";
import { useTranslation } from "react-i18next";
import { createClient } from "@supabase/supabase-js";
import { SupabaseClient } from '@supabase/supabase-js';
interface AppProviderProps {
    children: React.ReactNode;
}

interface SnackbarState {
    open: boolean;
    message: string;
    severity: "success" | "error" | "warning" | "info";
}

interface AppContextInterface {
    ShowAlert: (message: string, severity: SnackbarState["severity"]) => void;
    snackbar: SnackbarState;
    handleCloseSnackbar: () => void;
    translate: (key: string) => string;
    changeLanguage: (lang: string) => void;
    changeLanguageInteractive: () => void;
    supabase: SupabaseClient;
}

const AppContext = createContext<AppContextInterface | null>(null);

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [snackbar, setSnackbar] = useState<SnackbarState>({
        open: false,
        message: "",
        severity: "success",
    });

    // i18n Tradução de linguagem
    const { t: translate, i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
    };

    const changeLanguageInteractive = () => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage === "pt") {
            changeLanguage("en");
        } else if (storedLanguage === "en") {
            changeLanguage("es");
        } else if (storedLanguage === "es") {
            changeLanguage("pt");
        }
    };

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            changeLanguage(storedLanguage);
        } else {
            const navLang = navigator.language.split("-")[0];
            changeLanguage(navLang);
        }
    }, []);

    const ShowAlert = (message: string, severity: SnackbarState["severity"]) => {
        if (snackbar.open && snackbar.message === message && snackbar.severity === severity) {
          
            return;
        }
        setSnackbar({ open: true, message, severity });
    };

    const handleCloseSnackbar = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    const sharedState = {
        ShowAlert,
        snackbar,
        handleCloseSnackbar,
        changeLanguage,
        translate,
        changeLanguageInteractive,
        supabase,
    };

    return (
        <AppContext.Provider value={sharedState}>
            {children}
            <MaterialAlert snackbar={snackbar} handleCloseSnackbar={handleCloseSnackbar} />
        </AppContext.Provider>
    );
};

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
}

export default AppProvider;
