import { Grid2 } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';

import CardNewItem from './CustomComponents/CardNewItem'; // Ensure the correct path to the CardNewItem component
import { useAppContext } from "../../Context/Context";

export default function MaterialGrid() {

    const { translate } = useAppContext();
    return (
        <Grid2 container spacing={3} sx={styles.containerGrid}>
            <CardNewItem icon={<AddIcon />} color="primary" title={translate('diaper')} actionInfo="Item" />
            
            <CardNewItem icon={<AddIcon />} color="primary" title={translate('eat')} actionInfo="Item" />
            
            <CardNewItem icon={<AddIcon />} color="primary" title={translate('sleep') } actionInfo="Item" />
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