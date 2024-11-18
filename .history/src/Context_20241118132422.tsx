import { createContext, useContext } from "react";


interface AppProviderprops 
{
    children: React.ReactNode,
    ShowAlert: (message: string) => [];
    
}

interface AppContextInterface 
{
    sharedState: React.ReactElement; // Add here the properties of the AppContext
}


const AppContext = createContext<AppContextInterface | null>(null);
 
const AppProvider: React.FC<AppProviderprops> = ({ children }) => {
    
    
    function ShowAlert(message: string) { //TESTES DE CRIACAO DE MENSAGENS
     const date = new Date();
     const message01 = [message, date]
     return message01;
}
 
    const sharedState = {
        ShowAlert
        // Add here the methods of the AppContext
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