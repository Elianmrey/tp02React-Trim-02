import { Grid2 } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';

import CardNewItem from './CustomComponents/CardNewItem'; // Ensure the correct path to the CardNewItem component


export default function MaterialGrid() {
    return (
        <Grid2 container spacing={3} sx={styles.containerGrid}>
           <CardNewItem icon={<AddIcon />} color="primary" title="Fralda" actionInfo="Item" />
            
            <CardNewItem icon={<AddIcon />} color="primary" title="Amamento" actionInfo="Item" />
            
            <CardNewItem icon={<AddIcon />} color="primary" title="Sono" actionInfo="Item" />
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
}