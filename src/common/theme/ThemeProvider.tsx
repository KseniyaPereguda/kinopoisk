import { useState, type ReactNode, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './theme';
import { ThemeContext } from './ThemeContext';

export function ThemeProviderWrapper({ children }: { children: ReactNode }) {

    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });


    useEffect(() => {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        if (isDark) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);
    const theme = isDark ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ toggleTheme, isDark }}>
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
}