import { useState } from 'react';
import { Box, Button, InputBase } from "@mui/material";
import MaterialButton from "../../Components/MaterialButton";
import { useAppContext } from '../../../Context/Context';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validPassword } from '../../Utils/validators';

export default function Formulary() {
    const [info, setInfo] = useState<{ email: string; password: string }>({
        email: '',
        password: ''
    });

    const { ShowAlert, supabase } = useAppContext();
    const navigate = useNavigate();

    async function HandleSignUp() {
        // Validação de email e senha
        const emailValidation = validateEmail(info.email);
        const passwordValidation = validPassword(info.password);

        if (!info.email || !info.password) {
            ShowAlert("Os campos são obrigatórios.", "error");
            return;
        }

        if (emailValidation.error) {
            ShowAlert(emailValidation.message || "Email inválido.", "error");
            return;
        }

        if (passwordValidation.error) {
            ShowAlert(passwordValidation.message || "Senha inválida.", "error");
            return;
        }

        try {
            const { error } = await supabase.auth.signUp({
                email: info.email,
                password: info.password
            });

            if (error) {
                console.error("Erro ao criar usuário:", error.message);
                ShowAlert("Erro ao criar usuário. Verifique os dados e tente novamente.", "error");
                return;
            }

            ShowAlert("Cadastro efetuado com sucesso! Verifique seu email para confirmar o cadastro.", "success");
            navigate('/signin');
        } catch (err) {
            console.error("Erro inesperado:", err);
            ShowAlert("Ocorreu um erro. Tente novamente mais tarde.", "error");
        }
    }

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        HandleSignUp();
    }

    return (
        <Box sx={styles.container} component={'form'} onSubmit={onSubmit}>
            <h1>Página SignUp</h1>

            <form
                onSubmit={onSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    gap: 10,
                    padding: 20,
                }}
            >
                <InputBase
                    placeholder="Digite seu email"
                    value={info.email}
                    onChange={(e) => setInfo({ ...info, email: e.target.value })}
                    sx={styles.inputBase}
                />
                <InputBase
                    placeholder="Digite sua senha"
                    type="password"
                    value={info.password}
                    onChange={(e) => setInfo({ ...info, password: e.target.value })}
                    sx={styles.inputBase}
                />
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
    },
};
