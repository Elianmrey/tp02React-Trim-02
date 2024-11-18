import styles from './StyleFormulary.module.scss';
import { useState, useEffect } from 'react';
import MaterialButton from "../../Components/MaterialButton";
import { Button, FormGroup, Input, InputLabel, Typography, FormControl } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { dataBase } from '../../Data/Database.tsx';
import {addUser } from '../../Services/DataService.tsx';
import { useAppContext } from '../../Context.tsx';
export default function Formulary() {
    
    const{ShowAlert} = useAppContext();
   
    const [uId, _]= useState(dataBase.length > 0 ? dataBase.length : 0);
    const [data, setData] = useState<{ message: string }>();
    const [loading, setLoading] = useState<boolean>(true);
   
    const [info, setInfo] = useState<{
        userId: number,
        name: string,
        birthDate: string,
        occupation: string,
        experience: number } >({
       userId: uId,
        name: '',
        birthDate: '',
        occupation: '',
        experience: 0,
    });
    
    const onSubmit = (e: React.FormEvent) => { 
        e.preventDefault();
        setLoading(true);
        if (info) {
             addUser({ name: info.name, birthDate: info.birthDate, occupation: info.occupation, experience: info.experience, userId: info });
        }
        else {
            setLoading(false);
            ShowAlert('Preencha todos os campos. Por favor!','error');
        }
       
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

    console.log(dataBase);
    return (
        <div className={styles.container}>
            <h1>Formulário</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <p>{data?.message}</p>
            )}
            
            <Typography variant='h4'>Adicione seus dados</Typography>
           <form onSubmit={onSubmit} style={MaterialStyles.form}>
            <FormGroup sx={MaterialStyles.form}>

                <InputLabel htmlFor="name" sx={MaterialStyles.inputLabel}>Nome:</InputLabel>
                <Input name='name' type="text" placeholder="Digite seu nome" sx={MaterialStyles.input} value={info?.name} onChange={(e) =>HandleChange(e) }/>
                
                <InputLabel htmlFor="birthDate" sx={MaterialStyles.inputLabel} >Data de nascimento:</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br" >
                   
                    <DemoContainer components={['DateTimePicker']} sx={MaterialStyles.dateTimePickerContainer} locale="pt-br">
                        <DateTimePicker  name='birthDate' label="Selecione a data de nascimento" value={info?.birthDate ? dayjs(info.birthDate) : null}
<<<<<<< Tabnine <<<<<<<
                                onChange={(date) => setInfo((prevData) => ({ ...prevData, birthDate: new Date(date).toLocaleDateString('pt-BR') }))}//-
                                onChange={(date) => {//+
                                    if (date) {//+
                                        setInfo((prevData) => ({ ...prevData, birthDate: dayjs(date).toLocaleDateString('pt-BR') }));//+
                                    }//+
                                }}//+
>>>>>>> Tabnine >>>>>>>// {"conversationId":"908e8caa-80eb-48db-98c7-06ffd06224f1","source":"instruct"}
                                
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
        alignItems: 'center',
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
    