import { createContext, useContext, useEffect, useState } from "react";
import MaterialAlert from "../src/Components/MaterialAlert";
import { useTranslation } from 'react-i18next';


interface AppProviderProps {
    children: React.ReactNode;
}


interface AppContextInterface {
    ShowAlert: (message: string, severity: 'success' | 'error' | 'warning' | 'info') => void;
    snackbar: { open: boolean, message: string, severity: 'success' | 'error' | 'warning' | 'info' };
    handleCloseSnackbar: () => void;
}


const AppContext = createContext<AppContextInterface | null>(null);


const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' | 'warning' | 'info' });

   

    //i18n Tradução de linguagem 
    const {  t: translate, i18n } = useTranslation();

    function changeLanguage(lang: string) {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
    }
    
    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");

        if (storedLanguage) {
            changeLanguage(storedLanguage);
        } else {
            const navLang = navigator.language.split("-")[0];
            changeLanguage(navLang);
        }
    }, [])

    //Fim i18n

    function ShowAlert(message: string, severity: 'success' | 'error' | 'warning' | 'info') {
        setSnackbar({ open: true, message, severity });
    }


    function handleCloseSnackbar() {
        setSnackbar((prev) => ({ ...prev, open: false }));
    }

  
    const sharedState = {
        ShowAlert,
        snackbar,
        handleCloseSnackbar,
        changeLanguage,
        translate,
    };

    return (
        <AppContext.Provider value={sharedState}>
            {children}
            <MaterialAlert snackbar={snackbar} handleCloseSnackbar={handleCloseSnackbar} />
            
        </AppContext.Provider>
    );
}

interface AppContextInterface {
    translate: (key: string) => string;
    changeLanguage: (lang: string) => void
    ShowAlert: (message: string, severity: 'success' | 'error' | 'warning' | 'info') => void;
    snackbar: { open: boolean, message: string, severity: 'success' | 'error' | 'warning' | 'info' };
    handleCloseSnackbar: () => void;
    
}
// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}

export default AppProvider;
