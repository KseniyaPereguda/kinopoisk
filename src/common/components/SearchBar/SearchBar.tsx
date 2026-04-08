import {NavButton} from '@/common/components/NavButton/NavButton.ts';
import {useTheme} from '@mui/material';
import {useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router';
import s from './SearchBar.module.css'

export const SearchBar = () => {

    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(() => {
        return searchParams.get('q') || '';
    });
    const navigate = useNavigate();
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const isSearchDisabled = !searchQuery.trim();


    const handleSearch = () => {
        const trimmedQuery = searchQuery.trim();

        if (!trimmedQuery) {
            alert('Пожалуйста, введите название фильма');
            return;
        }

        const encodedQuery = encodeURIComponent(trimmedQuery);
        navigate(`/search?q=${encodedQuery}`);
    };

    const handleClear = () => {
        setSearchQuery('');
        navigate('/search');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setSearchQuery(newValue);

        if (newValue === '') {
            navigate('/search');
        }
    };


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isSearchDisabled) {
            handleSearch();
        }
    };

    return (
        <div className={s.search}>
            <div className={s.inputWrapper}>
            <input
                className={s.input}
                type="search"
                placeholder="Search for a movie"
                value={searchQuery}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                style={{
                    backgroundColor: isDark ? '#2d2d2d' : '#ffffff',
                    color: isDark ? '#ffffff' : '#333333'
                }}
            />
            {searchQuery && (
                <button
                    className={s.clearButton}
                    onClick={handleClear}
                    aria-label="Clear search"
                    type="button"
                >
                    ✕
                </button>
            )}
            </div>
            <NavButton onClick={handleSearch} disabled={isSearchDisabled}>
                Search
            </NavButton>
        </div>
    )
}