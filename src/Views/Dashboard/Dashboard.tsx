import { useState, useEffect } from 'react';
import MaterialButton from "../../Components/MaterialButton.tsx";
import {  Checkbox, FormControlLabel, FormGroup,  Radio,  RadioGroup } from '@mui/material';
import { ArrowDownward, ArrowDownwardOutlined, ArrowUpward, ArrowUpwardOutlined, Star, StarBorder } from '@mui/icons-material';

// import { dataBase } from '../../Data/Database'

import MaterialTable from '../../Components/MaterialTable.tsx';
import MaterialContainer from '../../Components/MaterialContainer.tsx';
import MaterialBox from '../../Components/MaterialBox.tsx';
import MaterialSwitch from '../../Components/MaterialSwitch.tsx';


export default function DashBoard() {

    const [data, setData] = useState<{ message: string } | null>(null);

    const [loading, setLoading] = useState<boolean>(true);
    const [open, setOpen] = useState(false);
     const [checked, setChecked] = useState<boolean>(false);
   
    const [filters, setFilters] = useState([] as Array<{ userId: number; name: string; birthDate: string; occupation: string; experience: number, description: string } | { name: string; birthDate: string; occupation: string; experience: number; userId?: number, description: string } >);
    
    

    useEffect(() => {

        async function fetchData() {
            setLoading(true);
            try {
                setTimeout(() => {
                    setData({ message: 'Olá ,Voce está em Dashboard!' });
                    // setFilters([...dataBase]);

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

    // function Ordenation(orderCriteria: string, dataBlock: { userId: number, name: string, birthDate: string, occupation: string, experience: number, description: string }[] | { name: string, birthDate: string, occupation: string, experience: number, userId?: number, description: string  }[])
    // {
    //     if (orderCriteria === 'desc')
    //     {
    //         const sortedData: { userId: number, name: string, birthDate: string, occupation: string, experience: number, description: string }[] | { name: string, birthDate: string, occupation: string, experience: number, userId?: number, description: string }[]
    //             = [...dataBlock].sort((a, b) => b.experience - a.experience)
    //         setFilters(sortedData);  
    //         setChecked(true);
    //     }
    //     else if (orderCriteria === 'asc')
    //     {
    //         const sortedData: { userId: number, name: string, birthDate: string, occupation: string, experience: number, description: string }[] | { name: string, birthDate: string, occupation: string, experience: number, userId?: number, description: string }[]
    //             = [...dataBlock].sort((a, b) => a.experience - b.experience);
    //         setFilters(sortedData);  
    //         setChecked(true);
    //     } 
    //     }
       
    function FilterByExperience(): void
    {
        if (checked) {
            const filteredData = filters.filter((user) => user.experience > 5);
            setFilters(filteredData);
        }
        else {
            // setFilters([...dataBase ]);
        }
    }

    const headNames = ['Nome', 'Data de Nascimento', 'Profissão', 'Tempo de Experiencia', 'Descrição da Profissão'];

    return (
        <MaterialBox styles={styles.container}>
            <h1>Página Dashboard</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <p>{data?.message}</p>
            )}

            <MaterialContainer styles={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', minWidth: '50%', backgroundColor: 'orange', borderRadius: '10px', padding: '10px', color: 'black'}}>
            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                <FormControlLabel name='filter' onClick={ActivateFilter} control={<Checkbox icon={<StarBorder sx={{ color: 'black' }} />} checkedIcon={<Star />} />} label="Ordenar por experiencia" />
                
                    {open ? <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioGroup sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'  }} name="radio-buttons-group">
                            <Radio onClick={() => {/* (Ordenation('desc', [...dataBase]))*/ }} icon={<ArrowDownwardOutlined/>}   checkedIcon={<ArrowDownward />} sx={{ color: 'black' }} value="Older" name="Older" /> Mais antigos
                            <Radio onClick={() => {/*(Ordenation('asc',dataBase))*/ }}  icon={<ArrowUpwardOutlined/>}   checkedIcon={<ArrowUpward/>} sx={{ color: 'black' }} value="Newer" name="Newer" /> Mais recentes
                            </RadioGroup>

                        <MaterialSwitch defaultChecked={checked} icon={<StarBorder sx={{ color: 'black' }} />} checkedIcon={<Star />} checked={checked ? false : true} label="Mais de 5 anos" style={{ marginLeft: '10px' }} onChange={() => { CheckedSwitch(); FilterByExperience() }} />
                    
                    </FormGroup>
               : false}
                </FormGroup>
            </MaterialContainer>

                <MaterialTable cellNames={headNames} dataBlock={filters} occupationRange='' filter={false} />
   
            
            
            
            <MaterialButton route="/" buttonText="Home" />
        </MaterialBox>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: '#181717',
        borderRadius: 15,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        width: '90%',
        height: 'fit-content',
        margin: '0 auto',
        padding: 20,
    }
}