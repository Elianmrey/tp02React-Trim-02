import { RouterProvider } from "react-router-dom";
import AppProvider from "./Context.tsx";
import routes from "./Routes/Routes.tsx";
import "./App.scss";
function App() {

  return (
    <AppProvider>
      <RouterProvider router={routes} />
    </AppProvider>
    
  )
}

export default App
