import styles from './StyleDashboard.module.scss';
import { useState, useEffect } from 'react';
import MaterialButton from "../../Components/MaterialButton.tsx";
import { Box, Checkbox, Container, FormControlLabel, FormGroup,  Radio,  RadioGroup,  Switch,  Tab,  Table, TableBody, TableCell, TableHead, TableRow, Tabs } from '@mui/material';
import { ArrowDownward, ArrowDownwardOutlined, ArrowUpward, ArrowUpwardOutlined, Star, StarBorder } from '@mui/icons-material';
import { dataBase } from '../../Data/Database'
import TabPanel from '../../Components/TabPainel.tsx';
import MaterialTable from '../../Components/MaterialTable.tsx';


export default function DashBoard() {

    const [data, setData] = useState<{ message: string } | null>(null);

    const [loading, setLoading] = useState<boolean>(true);
    const [open, setOpen] = useState(false);
     const [checked, setChecked] = useState<boolean>();
   
    const [filters, setFilters] = useState<
        ({ userId: number; name: string; birthDate: string; occupation: string; experience: number } |
        { name: string; birthDate: string; occupation: string; experience: number; userId?: null; })[]
    >();
    
    

    useEffect(() => {

        async function fetchData() {
            setLoading(true);
            try {
                await setTimeout(() => {
                    setData({ message: 'Olá ,Voce está em Dashboard!' });
                    setFilters(dataBase)
                    setLoading(false);
                    setChecked(true);

                }, 500);
            } catch (error) {
                console.error((error as Error).message);
            }
        }
        fetchData();
    }, []);






    function ActivateFilter() {
        setOpen(!open);
    }

    function CheckedSwitch() {
        setChecked(!checked);
    }

    function Ordenation(orderCriteria: string, dataBlock: [{userId: number, name: string, birthdate: string, occupation: string, experience: number  }])
    {
        if (orderCriteria === 'desc')
        {
              const sortedData: [{ userId: number, name: string, birthdate: string, occupation: string, experience: number }]
                = [...dataBlock].sort((a, b) => b.experience - a.experience)
            setFilters(sortedData);  
            setChecked(true);
        }
        else if (orderCriteria === 'asc')
        {
            const sortedData: [{ userId: number, name: string, birthdate: string, occupation: string, experience: number }]
                = [...dataBlock].sort((a, b) => a.experience - b.experience);
            setFilters(sortedData);  
            setChecked(true);
        } 
        }
       
    function FilterByExperience(): void
    {
        if (checked) {
            const filteredData = filters.filter((user) => user.experience > 5);
            setFilters(filteredData);
        }
        else {
            setFilters(dataBase);
        }
    }
    const headNames = ['Nome', 'Data de Nascimento', 'Profissão', 'Tempo de Experiencia'];
    return (
        <div className={styles.container}>
            <h1>Página Dashboard</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <p>{data?.message}</p>
            )}

            <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', backgroundColor: 'orange', borderRadius: '10px', padding: '10px', color: 'black'}}>
            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                <FormControlLabel name='filter' onClick={ActivateFilter} control={<Checkbox icon={<StarBorder sx={{ color: 'black' }} />} checkedIcon={<Star />} />} label="Ordenar por experiencia" />
                
                    {open ? <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioGroup sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'  }} name="radio-buttons-group">
                            <Radio onClick={() => (Ordenation('desc', dataBase))} icon={<ArrowDownwardOutlined/>}   checkedIcon={<ArrowDownward />} sx={{ color: 'black' }} value="Older" name="Older" /> Mais antigos
                            <Radio  onClick={() =>(Ordenation('asc',dataBase))}  icon={<ArrowUpwardOutlined/>}   checkedIcon={<ArrowUpward/>} sx={{ color: 'black' }} value="Newer" name="Newer" /> Mais recentes
                            </RadioGroup>
                        <FormControlLabel control={<Switch defaultChecked={checked ? () => setChecked(false) : () => setChecked(true)} icon={<StarBorder sx={{ color: 'black' }} />} checkedIcon={<Star />} checked={checked ? false : true} />} label="Mais de 5 anos" sx={{ marginLeft: '10px' }} onChange={() => { CheckedSwitch(); FilterByExperience() }} />
                       
                    </FormGroup>
               : false}
                </FormGroup>
            </Container>

<Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', backgroundColor: 'indigo', borderRadius: '10px', padding: '10px'}}>
                <MaterialTable cellNames={headNames} dataBlock={dataBase} />
            </Container>
           
            <TabPanel />

            





        
            <MaterialButton route="/" buttonText="Home" />
        </div>
    );
};

const tableStyles = {
    'td, th': {
        border: 2,
        borderStyle: 'groove',
        color: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }

}