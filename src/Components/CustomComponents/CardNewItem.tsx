
import { useNavigate } from "react-router-dom";
import MaterialTypography from '../MaterialTypography';
import MaterialFab from '../MaterialFab';
import { FabProps} from '@mui/material'; 
import MaterialContainer from '../MaterialContainer';


interface CardNewItemProps {
    icon?: React.ReactNode,
    color?: FabProps['color'],
    title?: string,
    actionInfo?: string,
}


export default function CardNewItem ({icon, color, title, actionInfo}: CardNewItemProps) {
    const navigate = useNavigate();

    return  <MaterialContainer styles={style.titleContainer}>
        <MaterialFab route="/settings" childrenIcon={icon} styles={style.fabStyle} color={color} onClick={() => navigate(`/new/${actionInfo}`)} />
        
                <MaterialTypography styles={style.titleTypography}> {title?title:"Asigne um título"}</MaterialTypography>
            </MaterialContainer>    
}

const style = {
    fab: {
        width: '70px',
        height: '70px',
        bgcolor: 'primary.main',
        "&:hover": { bgcolor: '#0061fc' },
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
    fabStyle: {
        width: '70px',
        height: '70px',
        bgcolor: 'primary.main',       
        "&:hover": { bgcolor: '#0061fc' },
    },
      titleTypography: {
        textAlign: 'center',
        fontSize: '20px',
        color: 'black',
    },
}