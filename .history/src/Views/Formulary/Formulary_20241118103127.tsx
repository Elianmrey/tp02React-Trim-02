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
import { dataBase } from '../../Data/Database.tsx';
import {addUser } from '../../Services/DataService.tsx';
export default function Formulary() {
    
    let idUser = dataBase.length > 0 ? dataBase.length : 0;
    
    const [data, setData] = useState<{ message: string } | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
   
    const [info, setInfo] = useState<{
        userId: number,
        name: string,
        birthDate: string,
        occupation: string,
        experience: number } | null>({
       userId: idUser + 1,
        name: '',
        birthDate: '',
        occupation: '',
        experience: 0,

    });
    
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        console.log(info);
        addUser(info);
        console.log(data
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
    function HandleChange(evnt) {
        const value = evnt.currentTarget.value;
        setInfo((prevData) => ({...prevData, [evnt.target.name]: value}));
}

    return (
        <div className={styles.container}>
            <h1>Formulário</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <p>{data?.message}</p>
            )}
            
            <Typography variant='h4'>Adicione seus dados</Typography>
            <FormGroup sx={MaterialStyles.form} onSubmit={() => onSubmit}>
                <InputLabel htmlFor="name" sx={MaterialStyles.inputLabel}>Nome:</InputLabel>
                <Input name='name' type="text" placeholder="Digite seu nome" sx={MaterialStyles.input} value={info?.name} onChange={(e) =>HandleChange(e) }/>
                
                <InputLabel htmlFor="birthDate" sx={MaterialStyles.inputLabel} >Data de nascimento:</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br" >
                   
                    <DemoContainer components={['DateTimePicker']} sx={MaterialStyles.dateTimePickerContainer} locale="pt-br">
                        <DateTimePicker name='birthDate' label="Selecione a data de nascimento" value={info?.birthDate ? dayjs(info.birthDate) : null}
                            onChange={(date) => setInfo((prevData) => ({...prevData, birthDate: date.toISOString()}))} sx={MaterialStyles.dateTimePicker} />
                    </DemoContainer>
                </LocalizationProvider>

                <InputLabel htmlFor="occupation" sx={MaterialStyles.inputLabel}>Ocupação:</InputLabel>
                <Input name='occupation' type="text" placeholder="Digite sua ocupação" sx={MaterialStyles.input} value={info?.occupation} onChange={(e) =>HandleChange(e) }/>

                <InputLabel htmlFor="experience" sx={MaterialStyles.inputLabel}>Tempo de experiência:</InputLabel>
                <Input name='experience' type="text" placeholder="Digite o tempo de experiência" sx={MaterialStyles.input}  value={info?.experience} onChange={(e) =>HandleChange(e) }/>

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
    dateTimePickerContainer: {
        width: '100%',
    },
    dateTimePicker: {
        width: '100%',
        color: 'white',
    },
    button: {
        width: '100%',
        color: 'white',
        backgroundColor: 'green',
        '&:hover': {
            backgroundColor: 'lightgreen',
            color: 'darkgreen',
        },
        '&:active': {
            backgroundColor: 'blue',
            outline: 'none',
            border: 'none',

        },
    }
    };
    