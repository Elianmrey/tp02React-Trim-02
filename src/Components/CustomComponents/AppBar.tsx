import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Box from '../MaterialBox';
import { IconButton } from '@mui/material';
import MaterialAvatar from '../MaterialAvatar';
import TranslateIcon from '@mui/icons-material/Translate';
import {useAppContext } from '../../../Context/Context';
import HomeIcon from '@mui/icons-material/Home';


interface AppBarProps {
  title: string;
  home?: boolean
}

export default function MaterialAppBar({ title, home }: AppBarProps) {
  const navigate = useNavigate();
  const { changeLanguageInteractive } = useAppContext();
  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar sx={styles.toolBar} >
       {!home? <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={styles.iconButton} onClick={() => navigate('/')} >
          <HomeIcon sx={{ color: 'orange' }}/>
              </IconButton>: false}
              
        <Typography variant="h6" component="h2" sx={styles.title} >
          {title}
        </Typography>
          <Box styles={styles.profileBox}>
            <IconButton sx={styles.languageButton} onClick={() => changeLanguageInteractive()}><TranslateIcon sx={{ color: 'white' }}/></IconButton>
            <MaterialAvatar />
          </Box>
      
      </Toolbar>
    </AppBar>
  );
}

const styles = {
    appBar: {
    width: '100%',
    position: 'relative',
    zIndex: 1,
    },
  toolBar: {
    justifyContent: 'space-between',
    position: 'relative',
    width: '100%',
    zIndex:1,
  },
    profileBox: {
        display: { xs: 'flex', md: 'none' },
        position: 'absolute',
        right: 55,
        zIndex: 10,
        width: '20%',
      justifyContent: 'flex-end',
      alignItems: 'center',
        alignSelf: 'center',
        paddingTop: '5px',
        paddingBottom: '5px',
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        position: 'absolute',
        left: 0, width: '100%',
        zIndex: 1,
    }, 
    iconButton: {
        position: 'relative',
      zIndex: 2,
  },
  languageButton: {
    bgcolor: '#1976D2',
    cursor: 'pointer',
    padding: '10px 10px',
    marginRight: '5px',
  }
}