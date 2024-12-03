import CribIcon from '@mui/icons-material/Crib';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SpaIcon from '@mui/icons-material/Spa';

const routines = [
    {
        id: 1,
        title: 'Sono',
        actionType: 1,
        Icon: CribIcon,
        color: '#4b10a9'
    },
    {
        id: 2,
        title: 'Amamentação',
        actionType: 2,
        Icon: RestaurantMenuIcon,
        color: '#47c869'
    },
    {
        id: 3,
        title: 'Fralda',
        actionType: 3,
        Icon: SpaIcon,
        color: '#f4cc1d'
    }
]



export {
    routines
}