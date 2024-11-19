import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function MaterialButton({route, buttonText}: {route: string, buttonText: string}) {
    return <Link to={route}><Fab variant="contained" color="primary"  sx={{ margin: '10px'}}>{buttonText}</Fab></Link>;
}