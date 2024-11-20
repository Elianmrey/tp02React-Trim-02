import { Alert, Snackbar } from "@mui/material";
import { createContext, useContext, useState } from "react";

interface AppProviderProps {
    children: React.ReactNode;
}

interface AppContextInterface {
    ShowAlert: (message: string, severity: 'success' | 'error' | 'warning' | 'info') => void;
}

const AppContext = createContext<AppContextInterface | null>(null);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [alert, setAlert] = useState<{ message: string; severity: 'success' | 'error' | 'warning' | 'info'; open: boolean }>({
        message: '',
        severity: 'info',
        open: false,
    });


    const ShowAlert = (message: string, severity: 'success' | 'error' | 'warning' | 'info') => {
        setAlert({ message, severity, open: true });
    };


    const handleClose = () => {
        setAlert((prev) => ({ ...prev, open: false }));
    };
    
    const sharedState = { ShowAlert};
 
    return (
        <AppContext.Provider value={sharedState}>
            {children}
          
            <Snackbar
                open={alert.open}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
                <Alert onClose={handleClose} severity={alert.severity} variant="filled">
                    {alert.message}
                </Alert>
            </Snackbar>
        </AppContext.Provider>
    );
};

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}

export default AppProvider;
