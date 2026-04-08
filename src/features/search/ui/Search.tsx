
import {useSearchParams} from 'react-router';
import {useGetMovieQuery} from '@/features/categoryMovies/api/movieApi';
import {useTheme} from '@mui/material';
import s from './Search.module.css';
import {SearchBar} from '@/common/components/SearchBar/SearchBar.tsx';
import {MovieCard} from '@/features/categoryMovies/components/ MovieCard/ MovieCard.tsx';
import {MoviesPagination} from '@/common/components/MoviesPagination/MoviesPagination.tsx';
import {useEffect, useState} from 'react';
import {MoviesGridSkeleton} from '@/common/components/Skeletons/MoviesGridSkeleton.tsx';


export const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [currentPage, setCurrentPage] = useState(1);

    const {data, error, isLoading} = useGetMovieQuery({
        query,
        page: currentPage},
        {skip: !query}
    );

    const hasResults = data && data.results && data.results.length > 0;

    const hasQuery = query.length > 0;

    const totalPages = data?.total_pages || 0;
    const totalResults = data?.total_results || 0;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        if (query) {
            setSearchParams({ q: query, page: '1' });
        }
    }, [query, setSearchParams]);

    return (
        <>
            <div className={`${s.container} ${isDark ? s.dark : ''}`}>
                <SearchBar/>
                {!hasQuery && !isLoading && !error && <p>Enter a movie title to start searching</p>}


                {isLoading && (
                    <MoviesGridSkeleton count={10} />
                )}

                {error && (
                    <div className={s.error}>
                        <p>Error loading results. Please try again.</p>
                    </div>
                )}

                {hasQuery && !isLoading && !error && !hasResults && (
                    <div className={s.noResults}>
                        <p>No matches found for "{query}"</p>
                    </div>
                )}

                {!isLoading && !error && hasResults && (<h1>Search results for: "{query}"</h1>)}

                <div className={s.moviesGrid}>
                    {data?.results.map(movie => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </div>

                {!isLoading && !error && hasResults && (
                    <MoviesPagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                        showTotal={true}
                        totalResults={totalResults}
                    />
                )}


                {data && data.total_results > 0 && (
                    <div className={s.resultsInfo}>
                        Found {data.total_results} movies
                    </div>
                )}
            </div>
        </>
    );
};