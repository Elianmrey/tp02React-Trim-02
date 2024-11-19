import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function MaterialButton({route, buttonText}: {route: string, buttonText: string}) {
    return <Link to={route}><Button varian  color="primary"  sx={{ margin: '10px', width: '140px', height: '140px'}}>{buttonText}</Button></Link>;
}