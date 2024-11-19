import styles from './StyleDashboard.module.scss';
import { useState, useEffect } from 'react';
import MaterialButton from "../../Components/MaterialButton";
import { Checkbox, Container, FormControlLabel, FormGroup,  Radio,  RadioGroup,  Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { ArrowDownward, ArrowDownwardOutlined, ArrowUpward, ArrowUpwardOutlined, Star, StarBorder } from '@mui/icons-material';
import { dataBase } from '../../Data/Database'


export default function DashBoard() {

    const [data, setData] = useState<{ message: string } | null>(null);

    const [loading, setLoading] = useState<boolean>(true);
    const [open, setOpen] = useState(false);
    
    const [filters, setFilters] = useState(dataBase);
    
    

    useEffect(() => {

        async function fetchData() {
            setLoading(true);
            try {
                await setTimeout(() => {
                    setData({ message: 'Olá ,Voce está em Dashboard!' });
                    
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.error((error as Error).message);
            }
        }

        fetchData();
    }, []);


    function ActivateFilter() {
        setOpen(!open);
    }

    function Ordenation(orderCriteria: string, dataBlock: [{userId: number, name: string, birthdate: string, occupation: string, experience: number  }])
    {
        if (orderCriteria === 'desc')
        {
              const sortedData: [{ userId: number, name: string, birthdate: string, occupation: string, experience: number }]
                = [...dataBlock].sort((a, b) => b.experience - a.experience)
        setFilters(sortedData);  
        }
        else if (orderCriteria === 'asc') {
            const sortedData: [{ userId: number, name: string, birthdate: string, occupation: string, experience: number }]
                = [...dataBlock].sort((a, b) => a.experience - b.experience)
            setFilters(sortedData);  
        }
          
        }
       

   
    return (
        <div className={styles.container}>
            <h1>Página Dashboard</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <p>{data?.message}</p>
            )}

            <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', backgroundColor: 'orange', borderRadius: '10px', padding: '10px'}}>
            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                <FormControlLabel name='filter' onClick={ActivateFilter} control={<Checkbox icon={<StarBorder sx={{ color: 'black' }} />} checkedIcon={<Star />} />} label="Ordenar por experiencia" />
                
                    {open ? <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioGroup sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'  }} name="radio-buttons-group">
                            <Radio onClick={() => (Ordenation('desc', dataBase))} icon={<ArrowDownwardOutlined/>}   checkedIcon={<ArrowDownward />} sx={{ color: 'black' }} value="Older" name="Older" /> Mais antigos
                            <Radio  onClick={() =>(Ordenation('asc',dataBase))}  icon={<ArrowUpwardOutlined/>}   checkedIcon={<ArrowUpwardOutlined />} sx={{ color: 'black' }} value="Newer" name="Newer" /> Mais recentes
                            </RadioGroup>
                
                       
                    </FormGroup>
               : false}
                </FormGroup>
            </Container>

<Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', backgroundColor: 'indigo', borderRadius: '10px', padding: '10px'}}>
            <Table sx= {tableStyles} >
                <TableHead >
                    <TableRow > 
                        <TableCell ><strong>Nome</strong></TableCell>
                        <TableCell><strong>Tempo de Experiência</strong></TableCell>
                        <TableCell><strong>Profissão</strong></TableCell>
                        <TableCell><strong>Tempo de Experiencia</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filters?.map((item, index) =>(<TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.birthDate}</TableCell>
                        <TableCell>{item.occupation}</TableCell>
                        <TableCell>{item.experience}</TableCell>
                    </TableRow >))}
                  </TableBody>
            </Table>
           </Container>

            <MaterialButton route="/" buttonText="Home"/>
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