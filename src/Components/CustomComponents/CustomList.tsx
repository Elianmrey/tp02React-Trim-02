import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import CribIcon from '@mui/icons-material/Crib';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SpaIcon from '@mui/icons-material/Spa';
import { useAppContext } from '../../../Context/Context';

interface ItemListProps {
    items: Array<{ id: number; name: string; action_type: number }>;
}

export default function ItemList({ items, ...props }: ItemListProps) {
    const navigate = useNavigate();
    const { translate } = useAppContext();

    if (!translate) {
        console.error("translate function is missing from context.");
        return null;
    }

    function getIcon(actionTypeScale: number) {
        switch (actionTypeScale) {
            case 1:
                return <CribIcon />;
            case 2:
                return <RestaurantMenuIcon />;
            case 3:
                return <SpaIcon />;
            default:
                return <RestaurantMenuIcon />;
        }
    }

    const actionTypeListToInt: { [key: number]: string } = {
        1: "sleep",
        2: "eat",
        3: "diaper",
    };

    const typeColor: { [key: number]: string } = {
        1: "#4b10a9",
        2: "#47c869",
        3: "#f4cc1d",
    };

    const generateSubtitle = (item: { id: number; name: string; action_type: number }, translate: (key: string) => string) => {
        return `${translate('Name')}: ${item.name}`;
    };

    return (
        <List {...props}>
            {items.map((item, index) => {
                const typeStr = actionTypeListToInt[item.action_type];
                return (
                    <ListItem
                        key={item.id}
                        sx={{
                            backgroundColor: "#fff",
                            borderRadius: "60px",
                            marginTop: "1em",
                        }}
                        id={`new-item-list-${index}`}
                        onClick={() => navigate(`/${item.action_type}/${item.id}`)}
                    >
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: typeColor[item.action_type] }}>
                                {getIcon(item.action_type)}
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