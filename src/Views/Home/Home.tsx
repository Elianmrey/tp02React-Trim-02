

import {  Box, Typography } from '@mui/material';

import MaterialGrid from '../../Components/MaterialGrid.tsx';
import MaterialCard from '../../Components/MaterialCard.tsx';
import TabPanel from '../../Components/TabPanel.tsx';
import MaterialBox from '../../Components/MaterialBox.tsx';
import AppBar from '../../Components/CustomComponents/AppBar.tsx';
import { useAppContext } from '../../../Context/Context.tsx';

export default function Home() {

    const { translate } = useAppContext();

return (
        <MaterialBox styles={Styles.container}>
        <Box sx={Styles.profileBox}>
            <AppBar title="Painel Inicial" id={1} />
            
        </Box>
        <Typography variant="h3" component="h1" sx={Styles.title}>{translate('welcome') }</Typography>
            
        <MaterialGrid />
        <MaterialCard styles={Styles.card}>
        <TabPanel />
        </MaterialCard>
        
    
        </MaterialBox>
    );
};

const Styles = {
   
    profileBox: {
        display: 'flex',        
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: '20px',
        width: '100%',
        height: '5vh',
        borderRadius: '10px',
      
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