import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    primary: {
      light: '#02978C',
      main: '#0B69CE',
      dark: '#245187',
      contrastText: '#fff',
    },
    secondary: {
      light: 'orange',
      main: '#005955',
      dark: 'orangered',
      contrastText: '#000',
        },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#4B10A9',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export {
    lightTheme,
    darkTheme
}