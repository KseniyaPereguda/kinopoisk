import { createContext } from 'react';


export interface ThemeContextType {
    toggleTheme: () => void;
    isDark: boolean;
}


export const ThemeContext = createContext<ThemeContextType>({
    toggleTheme: () => {},
    isDark: false,
});