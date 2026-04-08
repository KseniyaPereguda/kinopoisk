// theme/theme.ts
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3f5d9d',
        },
        background: {
            default: '#f6f6f6',
            paper: '#ffffff',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
        },
    },
});