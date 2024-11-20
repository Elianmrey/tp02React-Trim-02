import { Box, Tabs, Tab, Typography } from '@mui/material';
import { useState } from 'react';
import { dataBase } from '../Data/Database';
import MaterialTable from './MaterialTable';

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => {
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

interface TabPanelProps {
    children: React.ReactNode;
    value: number;
    index: number;
}

const TabsMUI = () => {
    const [value, setValue] = useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
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
                <Tab label="Desenvolvedores" id="tab-0" aria-controls="tabpanel-0" sx={StyleSheet.tab} />
                <Tab label="Managers" id="tab-1" aria-controls="tabpanel-1" sx={StyleSheet.tab} />
                <Tab label="Designers" id="tab-2" aria-controls="tabpanel-2" sx={StyleSheet.tab} />
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