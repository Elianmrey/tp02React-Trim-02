import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Box from '../MaterialBox';
import { Button, IconButton } from '@mui/material';
import MaterialAvatar from '../MaterialAvatar';
import TranslateIcon from '@mui/icons-material/Translate';
import {useAppContext } from '../../../Context/Context';
import HomeIcon from '@mui/icons-material/Home';

interface AppBarProps {
  title: string;
  id?: number;
  home?: boolean
}

export default function MaterialAppBar({ title, id, home }: AppBarProps) {
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
        {id ? (
          <Box styles={styles.profileBox}>
            <IconButton  onClick={() => changeLanguageInteractive()} sx={styles.languageButton}><TranslateIcon sx={{ color: 'white' }}/></IconButton>
            <MaterialAvatar />
          </Box>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}

const styles = {
    appBar: {
    width: '100%',
    },
  toolBar: {
    justifyContent: 'space-between',
    position: 'relative',
  },
    profileBox: {
        display: { xs: 'flex', md: 'none' },
        position: 'absolute',
        right: 10,
        zIndex: 0,
        width: '100%',
        justifyContent: 'flex-end',
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