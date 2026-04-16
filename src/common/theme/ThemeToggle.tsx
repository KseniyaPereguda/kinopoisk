import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from './useTheme';
import { styled } from '@mui/material/styles';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    border: `2px solid ${theme.palette.mode === 'dark' ? '#555' : '#ccc'}`,
    transition: 'all 0.3s ease',
    '&:hover': {
        border: `2px solid ${theme.palette.mode === 'dark' ? '#90caf9' : '#0751f6'}`,
        backgroundColor: theme.palette.mode === 'dark'
            ? 'rgba(144,202,249,0.1)'
            : 'rgba(7,81,246,0.1)',
    },
}));

export const ThemeToggle = () => {
    const { toggleTheme, isDark } = useTheme();

    return (
        <StyledIconButton onClick={toggleTheme} color="inherit">
            {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
        </StyledIconButton>
    );
};