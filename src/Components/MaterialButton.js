import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function MaterialButton({ route, buttonText }) {
    return _jsx(Link, { to: route, children: _jsx(Button, { variant: "contained", color: "primary", sx: { margin: '10px' }, children: buttonText }) });
}
