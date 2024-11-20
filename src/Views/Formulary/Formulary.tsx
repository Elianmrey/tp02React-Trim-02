import styles from './StyleFormulary.module.scss';
import { useState, useEffect } from 'react';
import MaterialButton from "../../Components/MaterialButton.tsx";
import { Box, Button, Container, FormGroup, Input, InputLabel, Typography } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; 
import { dataBase } from '../../Data/Database.tsx';
import {addUser } from '../../Services/DataService.tsx';
import { useAppContext } from '../../Context.tsx';
import { DatePicker } from '@mui/x-date-pickers-pro';
import dayjs from 'dayjs';
export default function Formulary() {
    
    

    const [uId, _]= useState(dataBase.length > 0 ? dataBase.length : 0);
    const [data, setData] = useState<{ message: string }>();
    const [loading, setLoading] = useState<boolean>(true);
   const [sending, setSending] = useState(false)
    const [info, setInfo] = useState<{
        userId: number,
        name: string,
        birthDate: string,
        occupation: string,
        experience: number } >({
            userId: 0,
        name: '',
        birthDate: '',
        occupation: '',
        experience: 0,
    });
    

    const{ShowAlert} = useAppContext();
    const onSubmit = (e: React.FormEvent) => { 
       e.preventDefault();
        setSending(true);
        if (info.name  && info.birthDate && info.occupation  && info.experience  !== 0) {
            console.log(info)
            addUser({userId: uId, name: info.name, birthDate: info.birthDate, occupation: info.occupation, experience: Number(info.experience) });
            setInfo({ userId: 0, name: '', birthDate: '', occupation: '', experience: 0 });
            ShowAlert('Dados enviados com sucesso!', 'success')
        } else if (!info.experience || !info.occupation  || !info.birthDate || !info.name) {
            
            ShowAlert('Preencha todos os campos. Por favor!', 'error');
        }
        setSending(false)        
    };

    
    
    useEffect(() => {

        async function fetchData() {
            setLoading(true);
            try {
                await setTimeout(() => {
                    setData({ message: 'Olá ,Voce está na pagina de Formulario!' });

                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.error((error as Error).message);
            }
        }

        fetchData();
    }, []);


    function HandleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        setInfo((prevData) => ({...prevData, [event.target.name]: value}));
    }

    
    return (
        <div className={styles.container}>
            <h1>Formulário</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <p>{data?.message}</p>
            )}
            {sending ? <Container sx={MaterialStyles.containerTitle}><Typography variant='h4' sx={MaterialStyles.title}>Enviando...</Typography></Container>
                : 
                <Box sx={MaterialStyles.box}>
            <Container sx={MaterialStyles.containerTitle}>
            <Typography variant='h4' sx={MaterialStyles.title}>Adicione seus dados</Typography>
            </Container>
            <Container sx={MaterialStyles.containerForm}>

            <form onSubmit={onSubmit} className={styles.form}>
            <FormGroup sx={MaterialStyles.form}>

                <InputLabel htmlFor="name" sx={MaterialStyles.inputLabel}>Nome:</InputLabel>
                <Input name='name' type="text" placeholder="Digite seu nome" sx={MaterialStyles.input} value={info?.name} onChange={(e) =>HandleChange(e) }/>
                
                <InputLabel htmlFor="birthDate" sx={MaterialStyles.inputLabel} >Data de nascimento:</InputLabel>
                                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br" >
                                    <DemoContainer components={['DateTimePicker']} sx={MaterialStyles.dateTimePickerContainer} >
                                        <DatePicker name='birthDate' label="Selecione a data de nascimento" onChange={(date) => setInfo((prevData) => ({
                                            ...prevData,
                                            birthDate: new Date(dayjs(date).format('YYYY-MM-DD')).toLocaleDateString('pt-BR')
                                        }))}
                                sx={MaterialStyles.dateTimePicker} />
                    </DemoContainer>
                </LocalizationProvider>

                <InputLabel htmlFor="occupation" sx={MaterialStyles.inputLabel}>Ocupação:</InputLabel>
                <Input name='occupation' type="text" placeholder="Digite sua ocupação" sx={MaterialStyles.input} value={info?.occupation} onChange={(e) =>HandleChange(e) }/>

                <InputLabel htmlFor="experience" sx={MaterialStyles.inputLabel}>Tempo de experiência:</InputLabel>
                <Input name='experience' type="text" placeholder="Digite o tempo de experiência" sx={MaterialStyles.input}  value={info?.experience} onChange={(e) =>HandleChange(e) }/>

                <Button type='submit' value='Enviar'  sx={MaterialStyles.button}>Enviar</Button>
                    </FormGroup>
            </form>
                <MaterialButton route="/" buttonText="Home" />
                    </Container>
                </Box>
            }
                
        </div>
    );
};


const MaterialStyles = {
    containerTitle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'orange',
        borderRadius: '10px',
        padding: '10px',
        boxShadow: 'inset 0px 0px 5px 1px black',
    },
    box: {
        display: 'flex',
        gap: '30px',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        borderRadius: '10px',
        padding: '10px',
    },
    title: {
        color: 'black',
    },
    input: {
        width: '100%',
        marginBottom: '10px',
        color: 'black',
    },
    containerForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'orange',
        borderRadius: '10px',
        padding: '10px',
        boxShadow: 'inset 0px 0px 20px 1px black',
    },
    inputLabel: {
        color: 'black',
    },
    dateTimePickerContainer: {
        width: '100%',
    },
    dateTimePicker: {
        width: '100%',
        color: 'black',
    },
    button: {
        width: '100%',
        color: 'white',
        backgroundColor: 'indigo',
        '&:hover': {
            boxShadow: '0px 2px 0 2px rebeccapurple',
        },
        '&:active': {
             boxShadow: 'none',
        },
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        gap: '10px',
        padding: '20px',
    },
    };
    