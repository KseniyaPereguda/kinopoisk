import type { Movie } from '@/common/types/movie.ts';
import { ViewMoreButton } from '@/common/components/ViewMoreButton/ViewMoreButton.ts';
import s from './MovieCategory.module.css';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import {MovieCard} from '@/features/categoryMovies/components/ MovieCard/ MovieCard.tsx';
import {MoviesGridSkeleton} from '@/common/components/Skeletons/MoviesGridSkeleton.tsx';

type MovieCategoryProps = {
    title: string;
    movies: Movie[];
    isLoading: boolean;
    error: FetchBaseQueryError | SerializedError | undefined;
    onViewMore: () => void;
}

export const MovieCategory = ({
                                  title,
                                  movies,
                                  onViewMore,
                                  isLoading,
                                  error
                              }: MovieCategoryProps) => {

    if (isLoading) {
        return (
            <div className={s.sectionContent}>
                <div className={s.sectionTop}>
                    <h2 className={s.titleSection}>{title}</h2>
                    <ViewMoreButton onClick={onViewMore}>View more</ViewMoreButton>
                </div>
                <MoviesGridSkeleton count={10} />
            </div>
        );
    }

    if (error) {
        return (
            <div className={s.sectionContent}>
                <div className={s.sectionTop}>
                    <h2 className={s.titleSection}>{title}</h2>
                    <ViewMoreButton onClick={onViewMore}>View more</ViewMoreButton>
                </div>
                <div className={s.error}>
                    <p>Failed to load {title}. Please try again.</p>
                </div>
            </div>
        );
    }

    if (movies.length === 0) {
        return null;
    }

    return (
        <div className={s.sectionContent}>
            <div className={s.sectionTop}>
                <h2 className={s.titleSection}>{title}</h2>
                <ViewMoreButton onClick={onViewMore}>View more</ViewMoreButton>
            </div>

            <div className={s.moviesGrid}>
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};