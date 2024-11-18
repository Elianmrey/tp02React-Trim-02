import styles from './StyleFormulary.module.scss';
import { useState, useEffect } from 'react';
import MaterialButton from "../../Components/MaterialButton";
import { Button, FormGroup, Input, InputLabel, Typography } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { Dayjs } from 'dayjs';
import { dataBase } from '../../Services/Utils/Database';
import {addUser } from '../../Services/DataService.tsx';
export default function Formulary() {
    let idUser = dataBase.length > 0 ? dataBase.length:num;
    const [data, setData] = useState<{ message: string } | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [info, setInfo] = useState<{userId: number, name: string, birthDate: string, occupation: string } | null>({
       userId: idUser + 1,
        name: '',
        birthDate: '',
        occupation: '',
    });
    
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        setLoading(true);
        addUser(info);
        setLoading(false);
    };

    useEffect(() => {

        async function fetchData() {
            setLoading(true);
            try {
                await setTimeout(() => {
                    setData({ message: 'Olá ,Voce está em Formulary!' });

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
            <h1>Formulário</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <p>{data?.message}</p>
            )}
            
            <Typography variant='h4'>Adicione seus dados</Typography>
            <FormGroup sx={MaterialStyles.form} onSubmit={(e) => }>
                <InputLabel htmlFor="name" sx={MaterialStyles.inputLabel}>Nome:</InputLabel>
                <Input name='name' type="text" placeholder="Digite seu nome" sx={MaterialStyles.input} value={info?.name} onChange={(e) => setInfo(...info, e.target.value)}/>
                
                <InputLabel htmlFor="birthDate" sx={MaterialStyles.inputLabel} >Data de nascimento:</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br" >
                    
                    <DemoContainer components={['DateTimePicker']} sx={MaterialStyles.dateTimePicker}>

                        <DateTimePicker name='birthDate' label="Selecione a data de nascimento" value={info?.birthDate ? dayjs(info.birthDate) : null}
                            onChange={(date) => setInfo(prevInfo => ({ ...prevInfo, birthDate: date?.toISOString() ?? '' }))} />
                    </DemoContainer>
                </LocalizationProvider>

                <InputLabel htmlFor="profession" sx={MaterialStyles.inputLabel}>Ocupação:</InputLabel>
                <Input name='profession' type="text" placeholder="Digite sua ocupação" sx={MaterialStyles.input} value={info?.name} onChange={(e) => setInfo(...info, e.target.value)}/>

                <InputLabel htmlFor="experience" sx={MaterialStyles.inputLabel}>Tempo de experiência:</InputLabel>
                <Input name='experience' type="text" placeholder="Digite o tempo de experiência" sx={MaterialStyles.input}  value={info?.name} onChange={(e) => setInfo(...info, e.target.value)}/>

                <Button type='submit' value='Enviar'  sx={MaterialStyles.button}>Enviar</Button>
            </FormGroup>
            <MaterialButton route="/" buttonText="Home"  />
        </div>
    );
};


const MaterialStyles = {
    input: {
        width: '100%',
        marginBottom: '10px',
        color: 'white',
    },
    inputLabel: {
        color: 'white',
       },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        gap: '10px',
        padding: '20px',
    },
    dateTimePicker: {
        width: '100%',
        marginBottom: '10px',
        color: 'white',
    },
    button: {
        width: '100%',
        marginBottom: '10px',
        color: 'white',
        backgroundColor: 'green',
       
        '&:hover': {
            backgroundColor: 'lightgreen',
        },
        '&:active': {
            backgroundColor: 'blue',
            outline: 'none',
            border: 'none',

        },
    }
};
    