import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Table, TableRow, TableCell, TableBody, TableHead, Container } from "@mui/material";
export default function MaterialTable({ cellNames, dataBlock, occupationRange, filter }) {
    return (filter ? (_jsx(Container, { sx: { width: '100%', height: '100%', backgroundColor: 'indigo', padding: '20px', borderRadius: '15px' }, children: _jsxs(Table, { sx: Styles, children: [_jsx(TableHead, { children: _jsx(TableRow, { children: cellNames.map((cell, index) => { return (_jsx(TableCell, { children: cell }, index)); }) }) }), _jsx(TableBody, { children: (dataBlock.filter(data => data.occupation === occupationRange)).map((data) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: data.name }), _jsx(TableCell, { children: data.occupation }), _jsxs(TableCell, { children: [data.experience, " anos"] })] }, data.userId))) })] }) }))
        :
            (_jsx(Container, { sx: { width: '100%', height: '100%', backgroundColor: 'indigo', padding: '20px', borderRadius: '15px' }, children: _jsxs(Table, { sx: Styles, children: [_jsx(TableHead, { children: _jsx(TableRow, { children: cellNames.map((cell, index) => { return (_jsx(TableCell, { children: cell }, index)); }) }) }), _jsx(TableBody, { children: dataBlock.map((item, index) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: item.name }), _jsx(TableCell, { children: item.birthDate }), _jsx(TableCell, { children: item.occupation }), _jsxs(TableCell, { children: [item.experience, " anos"] })] }, index))) })] }) })));
}
const Styles = {
    'th, td': {
        border: 2,
        borderStyle: 'groove',
        color: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
};
