import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useAppContext } from '../../../Context/Context';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import BedtimeIcon from '@mui/icons-material/Bedtime';


interface ItemListProps {
    items: Array<{ id: number; title: string; actionType: number }>;
}



export default function CustomItemList({ items, ...props }: ItemListProps) {


    const navigate = useNavigate();
    const { translate } = useAppContext();

    if (!translate) {
        console.error("translate function is missing from context.");
        return null;
    }

    function getIcon(actionTypeScale: number) {
        switch (actionTypeScale) {
            case 1:
                return <BedtimeIcon sx={{ color: '#FFB300' }}/>;
            case 2:
                return <RestaurantMenuIcon  sx={{ color: '#06B024' }}/>;
            case 3:
                return <BabyChangingStationIcon  sx={{ color: 'indigo' }}/>;
            default:
                return <RestaurantMenuIcon sx={{ color: '#06B024'  }}/>;
        }
    }

    const actionTypeListToInt: { [key: number]: string } = {
        1: "sleep",
        2: "eat",
        3: "diaper",
    };

    const typeColor: { [key: number]: string } = {
        1: "#4b10a9",
        2: "lightgreen",
        3: "#f4cc1d",
    };


    const generateSubtitle = (item: { title: string;}, translate: (key: string) => string) => {
        return `${translate('action')}: ${item.title}`;
    };

    /*   {
        title: 'Sono',
        actionType: 1,
        Icon: CribIcon,
        color: '#4b10a9'
    }
 */
    return (
        <List {...props}>
            {items.map((item, index) => {
                const typeStr = actionTypeListToInt[item.actionType];
                return (
                    <ListItem
                        key={item.id}
                        sx={{
                            backgroundColor: "#ccc",
                            borderRadius: "60px",
                            marginTop: "1em",
                        }}
                        id={`new-item-list-${index}`}
                        onClick={() => navigate(`/${item.actionType}/${item.id}`)}
                    >
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: typeColor[item.actionType] }}>
                                {getIcon(item.actionType)}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={translate(typeStr)}
                            secondary={generateSubtitle(item, translate)}
                        />
                    </ListItem>
                );
            })}
        </List>
    );
}