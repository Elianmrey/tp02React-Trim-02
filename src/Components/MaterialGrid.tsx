import { Grid2, Typography } from "@mui/material";
import MaterialFab from './MaterialFab.tsx';
import AddIcon from '@mui/icons-material/Add';
import MaterialContainer from "./MaterialContainer.tsx";

export default function MaterialGrid() {
    return (
        <Grid2 container spacing={3} sx={styles.containerGrid}>
            
            <MaterialContainer styles={styles.titleContainer}>
            <MaterialFab route="/formulary" icon={<AddIcon />} />
                <Typography sx={styles.title}>Comida</Typography>
            </MaterialContainer>
            <MaterialContainer styles={styles.titleContainer}>
                <MaterialFab route="/dashboard" icon={<AddIcon />} />
                <Typography sx={styles.title}>Sono</Typography>
            </MaterialContainer>
            <MaterialContainer styles={styles.titleContainer}>
                <MaterialFab route="/settings" icon={<AddIcon />} />
                <Typography sx={styles.title}>Fralda</Typography>
             </MaterialContainer>
           
            
                
           
        </Grid2>
    )
}

const styles = {
    containerGrid: {
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 'fit-content',
        backgroundColor: 'orange',
        borderRadius: '10px',
    },
    titleContainer: {
        width: '200px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: 'white',
        borderColor: 'orange',
    },
    title: {
        textAlign: 'center',
        fontSize: '20px',
        color: 'black',
    }
}