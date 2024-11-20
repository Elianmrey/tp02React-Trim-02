import { jsx as _jsx } from "react/jsx-runtime";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";
export default function MatrialFab({ route, buttonText }) {
    return _jsx(Link, { to: route, children: _jsx(Fab, { "aria-label": "add", color: "primary", sx: { margin: '10px', width: '140px', height: '140px' }, children: buttonText }) });
}
