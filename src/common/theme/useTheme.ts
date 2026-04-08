import { useContext } from 'react';
import { ThemeContext, type ThemeContextType } from './ThemeContext';

export const useTheme = (): ThemeContextType => {
    return useContext(ThemeContext); // просто возвращаем сразу
};