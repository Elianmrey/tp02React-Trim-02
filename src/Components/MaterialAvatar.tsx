
import { Avatar } from '@mui/material';
 

export default function MaterialAvatar() {
     return (
         <Avatar sx={Styles.avatar} />
     )   
 }

const Styles = {
    avatar: {
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
}