import { Navigate, Outlet, useLocation } from 'react-router-dom';



export default function Protected() {
     
    const location = useLocation();
    
    const user = localStorage.getItem('current_user_token')
    
        
    if (location.pathname === '/signin' || location.pathname === '/signup') {
        return <Outlet />;
    }
    return user ? <Outlet /> : <Navigate to="signin" />;

}

