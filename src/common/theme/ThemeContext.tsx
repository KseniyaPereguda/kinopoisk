import { createContext } from 'react';

// Тип для контекста
export interface ThemeContextType {
    toggleTheme: () => void;
    isDark: boolean;  // Добавляем isDark, чтобы знать текущую тему
}

// Создаем контекст с начальными значениями
export const ThemeContext = createContext<ThemeContextType>({
    toggleTheme: () => {},
    isDark: false,  // по умолчанию светлая тема
});