import { createContext, useContext, useState } from "react";
import MaterialAlert from "../src/Components/MaterialAlert";

// Definir a interface para as propriedades do provider
interface AppProviderProps {
    children: React.ReactNode;
}

// Definir a interface do contexto
interface AppContextInterface {
    ShowAlert: (message: string, severity: 'success' | 'error' | 'warning' | 'info') => void;
    snackbar: { open: boolean, message: string, severity: 'success' | 'error' | 'warning' | 'info' };
    handleCloseSnackbar: () => void;
}


const AppContext = createContext<AppContextInterface | null>(null);


const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' | 'warning' | 'info' });


    function ShowAlert(message: string, severity: 'success' | 'error' | 'warning' | 'info') {
        setSnackbar({ open: true, message, severity });
    }


    function handleCloseSnackbar() {
        setSnackbar((prev) => ({ ...prev, open: false }));
    }

  
    const sharedState = {
        ShowAlert,
        snackbar,
        handleCloseSnackbar
    };

    return (
        <AppContext.Provider value={sharedState}>
            {children}
            <MaterialAlert snackbar={snackbar} handleCloseSnackbar={handleCloseSnackbar} />
        </AppContext.Provider>
    );
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
