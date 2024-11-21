import { useState, useEffect } from 'react';
import MaterialFab from '../../Components/MaterialFab.tsx';
import { Avatar, Box, Card, Grid2, Typography } from '@mui/material';



export default function Home() {

    const [data, setData] = useState<{ message: string } | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {

        async function fetchData() {
            setLoading(true);
            try {
                await setTimeout(() => {
                    setData({ message: 'Olá ,Voce está em Home!' });

                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.error((error as Error).message);
            }
        }

        fetchData();
    }, []);
    
    return (
        <Box sx={Styles.container}>
            
            <Box sx={Styles.profileBox}>
                <Avatar sx={Styles.avatar}/>
            </Box>
            
            <Grid2 container spacing={3} sx={Styles.containerGrid}>
            <MaterialFab route="/formulary" buttonText="Formulário" />
            <MaterialFab route="/dashboard" buttonText="Dashboard" />
            <MaterialFab route="/settings" buttonText="Configurações" />
            </Grid2>
            
        <Card sx={Styles.card}>
                <Typography variant="h3" component="h1" sx={Styles.title}>Painel Inicial</Typography>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <p>{data?.message}</p>
                )}
                
           {/* <MaterialButton route="/formulary" buttonText="Formulário" />
           <MaterialButton route="/dashboard" buttonText="Dashboard" />
           <MaterialButton route="/settings" buttonText="Configurações" /> */}
                
        </Card>
        </Box>
    );
};

const Styles = {
    avatar:{
        width: '70px',
        height: '70px',
        backgroundColor: 'orange',
        color: '#fff',
        fontSize: '30px',
        fontWeight: 'bold',
        marginRight: '20px',
        '&& @media(min-width:768px)': {
            width: '60px',
            height: '60px',
        }
    },
    profileBox: {
        display: 'flex',        
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: '20px',
        width: '100%',
        height: '5vh',
        borderRadius: '10px',
      
    },
    containerGrid: {
        display: 'flex',
        padding: '20px',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: '20px',
        width: '100%',
        height: 'fit-content',
        overFlow: 'auto',
        backgroundColor: 'orange',
        borderRadius: '10px',
        borderColor: 'orange',
        borderWidth: '2px',
        borderStyle: 'solid',
    },
    container: {
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '90vh',
        backgroundColor: 'indigo',
        borderRadius: '10px',
        borderColor: 'grey',
        borderWidth: '2px',
        borderStyle: 'solid',
        
    },
    card: {
        width: '100%',
        height: 'fit-content',
        padding: '10px',
        boxShadow: '0px 0px 5px #999',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
            boxShadow: '0px 0px 10px #FFA507',
            transition: 'box-shadow 0.3s ease-in-out', 
            },
    },
    title: {
        
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#FFA507',
    },
    "body": {
        width: '100%',
       
       
    }
}