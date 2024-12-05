import { SupabaseClient } from '@supabase/supabase-js';
import { Navigate, redirect } from 'react-router-dom';

 function HandleVerificationProtected() {
    const user = localStorage.getItem('current_user_token')
    if(!user) {
        return <Navigate to="/signin" />;
    }   
    else {
        return null;
    }    
}

function IsAuthenticated() {
    const user = localStorage.getItem('session')
    if(user) {
        throw redirect('/');
    }
    else {  
        return null;
    }
}
    
const SignIn = async (email: string, password: string, supabase: SupabaseClient) => {
    return await supabase.auth.signInWithPassword({
        email, password
    });
}

const SignUp = async (email: string, password: string, supabase: SupabaseClient) => {
    return await supabase.auth.signUp({
        email, password
    });
}

const onLogout = async ( supabase: SupabaseClient) => {
    return await supabase.auth.signOut();
}

export { IsAuthenticated, HandleVerificationProtected, SignIn, SignUp, onLogout }