
import { useState, useEffect } from 'react';
import { Box, Button, InputBase } from "@mui/material";
import MaterialButton from "../../Components/MaterialButton";
import { GetFromLocalStrg, SaveToLocalStrg } from '../../Core/CoreFunctions';
import { useAppContext } from '../../../Context/Context';



export default function Formulary() {

    const [data, setData] = useState<{ message: string } | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [info, setInfo] = useState<{ name: string; email: string; password: string }>({
        name: '',
        email: '',
        password: ''
    });

    useEffect(() => {

        function fetchData() {
            setLoading(true);
            try {
                setTimeout(() => {
                    setData({ message: 'Olá ,Você está em SignUp!' });
                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.error((error as Error).message);
            }
        }

        fetchData();
    }, []);

    const { ShowAlert } = useAppContext();

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        const dataUsers = GetFromLocalStrg('users') || [];

        if (dataUsers.length > 0 && dataUsers.find((user: { email: string; }) => user.email === info.email)) {
            ShowAlert('Email ja cadastrado!', 'error');
            setInfo({ ...info, name: '', email: '', password: '' });
            return;
        } else if (info.name === '' || info.email === '' || info.password === '') {
            ShowAlert('Preencha todos os campos!', 'error');
        } else if (info.name, info.email, info.password) {
            SaveToLocalStrg('users', ([...dataUsers, info]));
            ShowAlert('Cadastro efetuado com sucesso!', 'success');
        }

    }

    return (
        <Box sx={styles.container}>
            <h1>Página SignUp</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <p>{data?.message}</p>
            )}
            <form onSubmit={onSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                gap: 10,
                padding: 20,
            }}>
                <InputBase
                    placeholder="Digite seu nome"
                    value={info.name}
                    onChange={(e) => setInfo({ ...info, name: e.target.value })}
                    sx={styles.inputBase} />
                <InputBase
                    placeholder="Digite seu email"
                    value={info.email}
                    onChange={(e) => setInfo({ ...info, email: e.target.value })}
                    sx={styles.inputBase} />
                <InputBase
                    placeholder="Digite sua senha"
                    value={info.password}
                    onChange={(e) => setInfo({ ...info, password: e.target.value })}
                    sx={styles.inputBase} />
                <Button variant="contained" type="submit" color="primary" sx={{ margin: '10px' }}>
                    Cadastrar
                </Button>
                <MaterialButton route="/signin" buttonText="Voltar" />
            </form>
        </Box>
    );
}



const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#181717',
        borderRadius: 5,
        width: '100%',
        margin: '0 auto',
        padding: 20,
    },
    inputBase: {
        color: 'white',
        margin: '10px',
        width: '100%',
        maxWidth: '40%',
        '& input::placeholder': {
            color: 'white',
            textAlign: 'center',
        },
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: '10px',
    }

}