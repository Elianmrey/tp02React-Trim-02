import { Fab } from "@mui/material";
import { Link } from "react-router-dom";

export default function MatrialFab({route, buttonText}: {route: string, buttonText: string}) {
    return <Link to={route}><Fab aria-label="add" color="primary" sx={Styles.fab}>{buttonText}</Fab></Link>;
}

const Styles = {
    fab: {
        width: '140px',
        height: '140px',
        bgcolor: 'primary.main',
       
        "&:hover": { bgcolor: '#001E36' },
         }
};