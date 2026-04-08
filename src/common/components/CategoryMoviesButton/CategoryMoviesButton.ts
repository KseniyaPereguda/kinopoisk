import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

type CategoryMoviesButtonProps = {
    isActive?: boolean;
}

export const CategoryMoviesButton = styled(Button)<CategoryMoviesButtonProps>(({ theme, isActive }) => ({
    minWidth: "120px",
    fontWeight: "600",
    borderRadius: "20px",
    textTransform: "none",
    margin: "0 10px",
    padding: "8px 16px",

    transition: "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.15s ease",

    // Светлая тема
    color: isActive ? "#ffffff" : "#222222",
    backgroundColor: isActive ? "#3023ff" : "transparent",
    border: isActive ? "1px solid #3023ff" : "1px solid #999999",

    '&:hover': {
        color: isActive ? "#ffffff" : "#3023ff",
        backgroundColor: isActive ? "#3023ff" : "rgba(48, 35, 255, 0.1)",
        border: "1px solid #3023ff",
    },

    '&:active': {
        backgroundColor: "#1a0f8c",
        transform: "scale(0.97)",
        transition: "all 0.1s ease",
    },

    // ========== ТЕМНАЯ ТЕМА ==========
    [theme.breakpoints.up('xs')]: {
        // Используем theme.palette.mode для определения темы
    },

    ...(theme.palette.mode === 'dark' && {
        // Неактивная кнопка в темной теме
        color: isActive ? "#121212" : "#ffffff",  // 👈 Белый текст для неактивных
        backgroundColor: isActive ? "#90caf9" : "transparent",
        border: isActive ? "1px solid #90caf9" : "1px solid #555555",

        '&:hover': {
            color: isActive ? "#121212" : "#90caf9",
            backgroundColor: isActive ? "#90caf9" : "rgba(144, 202, 249, 0.15)",
            border: "1px solid #90caf9",
        },

        '&:active': {
            backgroundColor: "#64b5f6",
            color: "#121212",
        },
    }),
}));