import styles from './StyleFormulary.module.scss';
import { useState, useEffect } from 'react';
import MaterialButton from "../../Components/MaterialButton";
import { Button, Container, FormGroup, Input, InputLabel, Typography } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; 
import { dataBase } from '../../Data/Database.tsx';
import {addUser } from '../../Services/DataService.tsx';
import { useAppContext } from '../../Context.tsx';
import { DatePicker } from '@mui/x-date-pickers-pro';
export default function Formulary() {
    
    const{ShowAlert, } = useAppContext();
   
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
        if (info.name !== '' && info.birthDate  !== ''  && info.occupation  !== ''  && info.experience  !== 0) {
             addUser({ name: info.name, birthDate: info.birthDate, occupation: info.occupation, experience: info.experience});
        } else if (info.experience === 0 || info.occupation === '' || info.birthDate === '' || info.name === '') {
            ShowAlert('Preencha todos os campos. Por favor!','error');
        }
            setLoading(false);
          
       
        
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
    function HandleChange(evnt) {
        const value = evnt.currentTarget.value;
        setInfo((prevData) => ({...prevData, [evnt.target.name]: value}));
}

    // console.log(dataBase);
    return (
        <div className={styles.container}>
            <h1>Formulário</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <p>{data?.message}</p>
            )}
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
                   
                    <DemoContainer components={['DateTimePicker']} sx={MaterialStyles.dateTimePickerContainer} locale="pt-Br">
                        <DatePicker  name='birthDate' label="Selecione a data de nascimento"  onChange={(date) => setInfo((prevData) => ({ ...prevData, birthDate: new Date(date).toLocaleDateString('pt-BR') }))}
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
            boxShadow: '5px 5px 0 2px rebeccapurple',
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
    