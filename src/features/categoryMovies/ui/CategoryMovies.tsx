import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery
} from '@/features/categoryMovies/api/movieApi.ts';
import s from './CategoryMovies.module.css'

import {CategoryMoviesButton} from '@/common/components/CategoryMoviesButton/CategoryMoviesButton.ts';
import {useNavigate, useParams} from 'react-router';
import {MoviesPagination} from '@/common/components/MoviesPagination/MoviesPagination.tsx';
import { useState } from 'react';
import {MovieCard} from '@/features/categoryMovies/components/ MovieCard/ MovieCard.tsx';
import {MoviesGridSkeleton} from '@/common/components/Skeletons/MoviesGridSkeleton.tsx'; // Убрали useEffect

type MovieCategory = 'popular' | 'top-rated' | 'upcoming' | 'now-playing';

const categoryNames: Record<MovieCategory, string> = {
    'popular': 'Popular Movies',
    'top-rated': 'Top Rated Movies',
    'upcoming': 'Upcoming Movies',
    'now-playing': 'Now Playing Movies'
};

export const CategoryMovies = () => {
    const navigate = useNavigate();
    const { category } = useParams<{ category: MovieCategory }>();

    const activeCategory = category && categoryNames[category]
        ? category
        : 'popular';

    const [currentPage, setCurrentPage] = useState(1);

    const popularQuery = useGetPopularMoviesQuery(currentPage, {
        skip: activeCategory !== 'popular'
    });

    const topRatedQuery = useGetTopRatedMoviesQuery(currentPage, {
        skip: activeCategory !== 'top-rated'
    });

    const upcomingQuery = useGetUpcomingMoviesQuery(currentPage, {
        skip: activeCategory !== 'upcoming'
    });

    const nowPlayingQuery = useGetNowPlayingMoviesQuery(currentPage, {
        skip: activeCategory !== 'now-playing'
    });

    const getCurrentData = () => {
        switch (activeCategory) {
            case 'popular':
                return {
                    data: popularQuery.data,
                    isLoading: popularQuery.isLoading,
                    error: popularQuery.error
                };
            case 'top-rated':
                return {
                    data: topRatedQuery.data,
                    isLoading: topRatedQuery.isLoading,
                    error: topRatedQuery.error
                };
            case 'upcoming':
                return {
                    data: upcomingQuery.data,
                    isLoading: upcomingQuery.isLoading,
                    error: upcomingQuery.error
                };
            case 'now-playing':
                return {
                    data: nowPlayingQuery.data,
                    isLoading: nowPlayingQuery.isLoading,
                    error: nowPlayingQuery.error
                };
            default:
                return { data: null, isLoading: false, error: null };
        }
    };

    const {data, isLoading, error} = getCurrentData();

    const totalPages = data?.total_pages || 1;
    const totalResults = data?.total_results || 0;

    const handleCategoryChange = (newCategory: MovieCategory) => {
        setCurrentPage(1); // Сбрасываем страницу
        navigate(`/category/${newCategory}`);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    return (
        <>
            {isLoading && <MoviesGridSkeleton count={10} />}
            {error && <div className={s.error}>Error loading movies</div>}

            <div className={s.buttons}>
                <CategoryMoviesButton
                    isActive={activeCategory === 'popular'}
                    onClick={() => handleCategoryChange('popular')}
                >
                    Popular Movies
                </CategoryMoviesButton>

                <CategoryMoviesButton
                    isActive={activeCategory === 'top-rated'}
                    onClick={() => handleCategoryChange('top-rated')}
                >
                    Top Rated Movies
                </CategoryMoviesButton>

                <CategoryMoviesButton
                    isActive={activeCategory === 'upcoming'}
                    onClick={() => handleCategoryChange('upcoming')}
                >
                    Upcoming Movies
                </CategoryMoviesButton>

                <CategoryMoviesButton
                    isActive={activeCategory === 'now-playing'}
                    onClick={() => handleCategoryChange('now-playing')}
                >
                    Now Playing Movies
                </CategoryMoviesButton>
            </div>

            <h2 className={s.categoryTitle}>
                {categoryNames[activeCategory]}
            </h2>

            <div className={s.moviesGrid}>
                {data?.results?.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>

            {!isLoading && !error && data?.results && data.results.length > 0 && (
                <MoviesPagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    showTotal={true}
                    totalResults={totalResults}
                />
            )}
        </>
    )
}