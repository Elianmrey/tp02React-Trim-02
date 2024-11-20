import { Alert, Snackbar } from "@mui/material";
import { createContext, useContext, useState } from "react";


interface AppProviderprops 
{
    children: React.ReactNode,
   
    
}

interface AppContextInterface {
    sharedState?: AppProviderprops;
    
    ShowAlert: (message: string, possibleSeverity: 'success' | 'error' | 'warning' | 'info') => React.ReactNode;
    HandleOpenClose: (value: boolean) => void
}
const AppContext = createContext<AppContextInterface | null>(null);
 


const AppProvider: React.FC<AppProviderprops> = ({ children }) => {
    
    const [isOpen, setIsOpen] = useState(true);
  
    function HandleOpenClose(value: boolean) {
        setIsOpen(value); };
    
    function ShowAlert(message: string, possibleSeverity: 'success' | 'error' | 'warning' | 'info' ) {
        return (
            <Snackbar open={isOpen}
            autoHideDuration={5000}
                onClose={()=>HandleOpenClose(false)} sx={{ width: '50%' }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={() => HandleOpenClose(false)}
                    severity= {possibleSeverity}
                    variant="filled" >
                    {message}
                </Alert>
            </Snackbar>)
    }   

    
 
    const sharedState = {
        ShowAlert,
       HandleOpenClose
    }

    return <AppContext.Provider value={sharedState}>
                    {children}
               </AppContext.Provider>;
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context;
}

export default AppProvider;