import styles from './StyleDashboard.module.scss';
import { useState, useEffect } from 'react';
import MaterialButton from "../../Components/MaterialButton";
import { Checkbox, Container, FormControlLabel, FormGroup,  Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
import { dataBase } from '../../Data/Database'


export default function DashBoard() {

    const [data, setData] = useState<{ message: string } | null>(null);

    const [loading, setLoading] = useState<boolean>(true);
    const [open, setOpen] = useState(false);
    
    const [filters, setFilters] = useState();

    useEffect(() => {

        async function fetchData() {
            setLoading(true);
            try {
                await setTimeout(() => {
                    setData({ message: 'Olá ,Voce está em Dashboard!' });

                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.error((error as Error).message);
            }
        }

        fetchData();
    }, []);


    function ActivateFilter() {
        setOpen(!open);
    }

    function Ordenation(stateToOrder: [{ userId: number, name: string, birthDate: string, occupation: string, experience: number }]
        , paramOrdenation: boolean = false,
        orderType: string = 'asc' | 'desc') {
        
        if(paramOrdenation=== true && orderType === 'desc')
           return setFilters(stateToOrder.sort((a, b) => { return a.experience - b.experience }));
            
        else if(paramOrenation===true && orderType === 'asc')
         return setFilters(stateToOrder.sort((a, b) => { return b.experience - a.experience }));    
    }

    function orderResult(stateToOrder , orderParam: boolean,orderType:string ) {
        
        Ordenation(stateToOrder, orderParam, orderType);
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
                <FormControlLabel name='filter' onClick={ActivateFilter} control={<Checkbox icon={<StarBorder sx={{ color: 'black' }} />} checkedIcon={<Star />} />} label="Filtrar" />
                
                    {open ? <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                <FormControlLabel onClick={()=>Ordenation(dataBase,true,'desc')} control={<Checkbox icon={<StarBorder sx={{ color: 'black' }} />} checkedIcon={<Star />} />} label="Mais antigos" />
                <FormControlLabel control={<Checkbox icon={<StarBorder sx={{ color: 'black' }} />} checkedIcon={<Star />} />} label="Mais recentes" />
                        <FormControlLabel control={<Checkbox icon={<StarBorder sx={{ color: 'black' }} />} checkedIcon={<Star />} />} label="Mais recentes" />
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