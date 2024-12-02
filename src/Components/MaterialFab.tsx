import { Fab } from "@mui/material";
import { Link } from "react-router-dom";


interface MatrialFabProps {
    route: string,
    icon: React.ReactNode
}

export default function MatrialFab({route, icon}: MatrialFabProps) {
    return <Link to={route}><Fab aria-label="add" color="primary" sx={Styles.fab}>{icon}</Fab></Link>;
}

const Styles = {
    fab: {
        width: '70px',
        height: '70px',
        bgcolor: 'primary.main',       
        "&:hover": { bgcolor: '#001E36' },
         }
};