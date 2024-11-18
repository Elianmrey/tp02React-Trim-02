import React, { useState } from "react";
import {  SaveToLocalStrg } from "../../Services/LocalStorageManagement";
import { Link, redirect } from "react-router-dom";
import { Typography } from "@mui/material";
import styles from  "./StyleLogin.module.scss";
import  { useAppContext } from '../../Context.tsx';

{ ShowAlert, ShowSnack, } = useAppContext();

export default function Signin() {
    const [userData, setUserData] = useState<{ userName: string; password: string }>({
        userName: '',
        password: ''
    });

    

    function HandleChange(e: React.ChangeEvent<HTMLInputElement>, field: 'userName' | 'password') {
        const value = e.currentTarget.value;
        setUserData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    }
    function CredentialsOk() {
        const user =  localStorage.getItem('current_user_token');
        if (user) {
            return true;
        }
        return false;
    }
    
     function HandleSubmit() {
       
    if(!userData.userName || !userData.password) {
        alert('Preencha todos os campos. Por favor!');
        return null;
    }
        SaveToLocalStrg('current_user_token', userData);
        
         if (CredentialsOk()) {
             console.log("Usuario autenticado!");
             throw redirect('/home');
                   } else {
            console.log("Falha de autenticaçao!");
            return null;
        }
         
        
    }
   

    return (
        <div>

            <Typography variant="h2" component="h2" align="center" gutterBottom style={{ fontSize: '3rem', fontWeight: 'bold' }}>Login</Typography>
       
                <form onSubmit={HandleSubmit} className={styles.container}>
                    
                    <input type="text" placeholder="Usuario" value={userData.userName}
                    onChange={(e) => HandleChange(e, 'userName')} className={styles.input} />
                    
                    <input type="password" placeholder="Senha" value={userData.password}
                    onChange={(e) => HandleChange(e, 'password')} className={styles.input} />
                    
                <button type="submit" className={styles.button} >Login</button>
                <Link to="/signup">
                    <button className={styles.button}>
                    Criar conta</button>
                </Link>
                </form>
            {ShowSnack("Ola Benvindo ao TP de React");
                ShowAlert("Digite qualquer senha ")};
 
            
            </div>
    );
}
