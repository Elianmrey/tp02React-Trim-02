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
    const user = localStorage.getItem('current_user_token')
    if(user) {
        throw redirect('/');
    }
    else {  
        return null;
    }
}
    
const signIn = async (email: string, password: string, supabase) => {
    return await supabase.auth.signInWithPassword({
        email, password
    });
}

const signUp = async (email: string, password: string, supabase) => {
    return await supabase.auth.signUp({
        email, password
    });
}

export { IsAuthenticated, HandleVerificationProtected, signIn, signUp }