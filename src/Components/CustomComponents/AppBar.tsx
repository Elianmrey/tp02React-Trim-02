import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Box from '../MaterialBox';
import { Button, IconButton } from '@mui/material';
import MaterialAvatar from '../MaterialAvatar';
import TranslateIcon from '@mui/icons-material/Translate';
import {useAppContext } from '../../../Context/Context';

interface AppBarProps {
  title: string;
  id?: number;
}

export default function MaterialAppBar({ title, id }: AppBarProps) {
  const navigate = useNavigate();
  const { changeLanguageInteractive } = useAppContext();
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between', position: 'relative', }} >
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={styles.iconButton} onClick={() => navigate('/')} >
          <ArrowBackIcon />
              </IconButton>
              
        <Typography variant="h6" component="h2" sx={styles.title} >
          {title}
        </Typography>
        {id ? (
          <Box styles={styles.profileBox}>
            <Button  onClick={() => changeLanguageInteractive()} sx={styles.languageButton}><TranslateIcon sx={{ color: 'white' }}/></Button>
            <MaterialAvatar />
          </Box>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}

const styles = {
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
    padding: '5px 10px',
    marginRight: '10px',
  }
}