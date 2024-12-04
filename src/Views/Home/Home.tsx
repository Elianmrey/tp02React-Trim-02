import MaterialGrid from '../../Components/MaterialGrid.tsx';
import MaterialCard from '../../Components/MaterialCard.tsx';
// import TabPanel from '../../Components/TabPanel.tsx';
import MaterialBox from '../../Components/MaterialBox.tsx';
import AppBar from '../../Components/CustomComponents/AppBar.tsx';
import { useAppContext } from '../../../Context/Context.tsx';
import MaterialTypography from './../../Components/MaterialTypography';
import {baby} from '../../Constants/Data';
import CustomItemList from '../../Components/CustomComponents/CustomList.tsx';
import { routines } from '../../Constants/RoutinesInfo.tsx'


export default function Home() {

    const { translate} = useAppContext();

return (
    <MaterialBox styles={Styles.container}>
        <MaterialBox styles={Styles.profileBox}>
            <AppBar title={ translate("initial-panel")} home={true} id={1}/>
        </MaterialBox>
        
       
        
        <MaterialTypography variant="h5" component="h1" styles={Styles.title}>{translate('welcome')}</MaterialTypography>
            
        <MaterialGrid baby={baby} />
        <MaterialCard styles={Styles.card}>
        
        
            <CustomItemList items={routines } />
        
        
        </MaterialCard>
        
    
        </MaterialBox>
    );
};

const Styles = {
   
    profileBox: {
        display: 'flex',        
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: '20px',
        width: '100%',
        height: '5vh',
        borderRadius: '10px',
      
    },
    
    container: {
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '90vh',
        backgroundColor: 'indigo',
        borderRadius: '10px',
        borderColor: 'grey',
        borderWidth: '2px',
        borderStyle: 'solid',
        margin: '10px auto',
    },
   card: {
    width: '96%',
    height: 'fit-content',
    padding: '10px',
    boxShadow: '0px 0px 5px #999',
    transition: 'box-shadow 0.3s ease-in-out',
    borderRadius: '10px',
    overflowY: 'scroll',
       margin: '10px auto',
          
    '&::-webkit-scrollbar': {
            display: 'none', 
        },
        '&::-moz-scrollbar': {
            display: 'none',
        },
        scrollbarWidth: 'none', 
    },
    title: {
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#FFA507',
    },

}