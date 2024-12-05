import MaterialContainer from '../../Components/MaterialContainer.tsx';
import MaterialBox from '../../Components/MaterialBox.tsx';
import { useParams } from 'react-router-dom';
import { get } from '../../Services/Supabase.tsx';
import MaterialTypography from '../../Components/MaterialTypography.tsx';
import { useState } from 'react';
import MaterialCard from '../../Components/MaterialCard.tsx';


export default function DashBoard() {
    
    const [dataItem, setDataItem] = useState({});
    const { id } = useParams();
   
    async function getDashboard(idItem: number) {
     try {
         await get("items", idItem).then((response: any) => setDataItem(response[0] as any));
     } catch (error) {
        console.log(error);
     }
        }
  

   getDashboard(Number(id));
        console.log(dataItem);
    return (
        <MaterialBox styles={styles.container}>
            <MaterialContainer styles={{width: "100%"}}>
                
                <MaterialTypography variant="h4" component="h1" styles={{ textAlign: 'center', marginBottom: 20, display:'block'} }>Dashboard</MaterialTypography>
            <MaterialCard>
                    {Object.keys(dataItem).map(key => (
                        <MaterialTypography key={key}>{key}: {dataItem?.[key]} </MaterialTypography>
                    ))}
                
                <MaterialTypography> Sem Implementação Grafica (Não solicitado)</MaterialTypography>
              </MaterialCard>
           </MaterialContainer>
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