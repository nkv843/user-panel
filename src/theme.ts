import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1A47ED',
      dark: '#002261',
      light: '#4067F9',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF5F5F',
      dark: '#DE3B3B',
      contrastText: '#FFFFFF',
    },
  },
  shape: {
    borderRadius: 12,
  },
}); 