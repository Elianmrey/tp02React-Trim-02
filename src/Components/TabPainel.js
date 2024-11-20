import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { useState } from 'react';
import { dataBase } from '../Data/Database';
import MaterialTable from './MaterialTable';
const TabPanel = ({ children, value, index, ...other }) => {
    return (_jsx("div", { role: "tabpanel", hidden: value !== index, id: `tabpanel-${index}`, "aria-labelledby": `tab-${index}`, ...other, children: value === index && (_jsx(Box, { sx: { p: 3 }, children: _jsx(Typography, { children: children }) })) }));
};
const TabsMUI = () => {
    const [value, setValue] = useState(0);
    const handleChange = (_, newValue) => {
        setValue(newValue);
    };
    const headNames = ['Nome', 'Cargo', 'Experiencia'];
    return (_jsxs(Box, { sx: { width: '100%' }, children: [_jsxs(Tabs, { value: value, onChange: handleChange, "aria-label": "Tabs example", centered: true, children: [_jsx(Tab, { label: "Desenvolvedores", id: "tab-0", "aria-controls": "tabpanel-0", sx: StyleSheet.tab }), _jsx(Tab, { label: "Managers", id: "tab-1", "aria-controls": "tabpanel-1", sx: StyleSheet.tab }), _jsx(Tab, { label: "Designers", id: "tab-2", "aria-controls": "tabpanel-2", sx: StyleSheet.tab })] }), _jsx(TabPanel, { value: value, index: 0, children: _jsx(MaterialTable, { cellNames: headNames, dataBlock: dataBase, occupationRange: 'Desenvolvedor', filter: true }) }), _jsx(TabPanel, { value: value, index: 1, children: _jsx(MaterialTable, { cellNames: headNames, dataBlock: dataBase, occupationRange: 'Manager', filter: true }) }), _jsx(TabPanel, { value: value, index: 2, children: _jsx(MaterialTable, { cellNames: headNames, dataBlock: dataBase, occupationRange: 'Designer', filter: true }) })] }));
};
export default TabsMUI;
const StyleSheet = {
    tab: {
        color: 'white',
        backgroundColor: 'orange',
        '&.Mui-selected': {
            color: 'white',
            backgroundColor: 'indigo',
            transition: 'all 0.5s ease-in-out',
        },
    },
};
