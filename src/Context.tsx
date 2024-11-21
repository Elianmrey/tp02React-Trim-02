import { Alert, Snackbar } from "@mui/material";
import { createContext, useContext, useState } from "react";


interface AppProviderprops {
    children: React.ReactNode,


}

interface AppContextInterface {
    sharedState?: AppProviderprops;
    ShowAlert: (message: string, possibleSeverity: 'success' | 'error' | 'warning' | 'info') => React.ReactNode;

}
const AppContext = createContext<AppContextInterface | null>(null);



const AppProvider: React.FC<AppProviderprops> = ({ children }) => {

    const [isOpen, setIsOpen] = useState(true);

    function HandleOpenClose() {
        setIsOpen(!isOpen);
    };
    

    function ShowAlert(message: string, possibleSeverity: 'success' | 'error' | 'warning' | 'info') {
        return (
            <Snackbar open={isOpen}
                autoHideDuration={5000}
                onClose={HandleOpenClose} sx={{ width: '50%' }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={HandleOpenClose}
                    severity={possibleSeverity}
                    variant="filled" >
                    {message}
                </Alert>
            </Snackbar>)
    }



    const sharedState = {
        ShowAlert,

    }

    return <AppContext.Provider value={sharedState}>
        {children}
    </AppContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context;
}

export default AppProvider;