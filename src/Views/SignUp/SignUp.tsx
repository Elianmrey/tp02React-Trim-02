import { Link } from "react-router-dom";
import styles from './StyleSignUp.module.scss';



import { useState, useEffect } from 'react';

export default function Formulary() {

    const [data, setData] = useState<{ message: string } | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {

         function fetchData() {
            setLoading(true);
            try {
                 setTimeout(() => {
                     setData({ message: 'Olá ,Voce está em SignUp!' });

                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.error((error as Error).message);
            }
        }

        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <h1>Página SignUp</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <p>{data?.message}</p>
            )}

            <Link to="/">Voltar</Link>
        </div>
    );
};
