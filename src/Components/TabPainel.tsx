import { Box, Tabs, Tab, Typography } from '@mui/material';
import { useState } from 'react';
import { dataBase } from '../Data/Database';
import MaterialTable from './MaterialTable';

const TabPanel = ({ children, value, index, ...other }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

const TabsMUI = () => {
    const [value, setValue] = useState(0);

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };
    const headNames = ['Nome', 'Cargo', 'Experiencia']
    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Tabs example"
                centered
            >
                <Tab label="Desenvolvedores" id="tab-0" aria-controls="tabpanel-0" />
                <Tab label="Managers" id="tab-1" aria-controls="tabpanel-1" />
                <Tab label="Designers" id="tab-2" aria-controls="tabpanel-2" />
            </Tabs>

            <TabPanel value={value} index={0}>
                <MaterialTable cellNames={headNames} dataBlock={dataBase}  occupationRange='Desenvolvedor' filter/>

            </TabPanel>
            
            <TabPanel value={value} index={1}>
                <MaterialTable cellNames={headNames} dataBlock={dataBase} occupationRange='Manager' filter />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <MaterialTable cellNames={headNames} dataBlock={dataBase} occupationRange='Designer' filter />
            </TabPanel>
        </Box>
    );
};

export default TabsMUI;
