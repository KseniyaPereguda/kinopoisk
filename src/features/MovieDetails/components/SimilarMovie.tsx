import s from './SimilarMovie.module.css'
import {MovieCard} from '@/features/categoryMovies/components/ MovieCard/ MovieCard.tsx';
import {useGetSimilarMovieQuery} from '@/features/categoryMovies/api/movieApi.ts';

type SimilarMoviesProps = {
    movieId: number;
}

export const SimilarMovies = ({ movieId }: SimilarMoviesProps) => {
    const { data: similarMovies, isLoading, error } = useGetSimilarMovieQuery(movieId, {
        skip: !movieId
    });

    if (isLoading) return <div className={s.loading}>Loading similar movies...</div>;
    if (error) return <div className={s.error}>Failed to load similar movies</div>;
    if (!similarMovies?.results?.length) return null;

    // Берем первые 6 похожих фильмов
    const movies = similarMovies.results.slice(0, 6);

    return (
        <div className={s.similarSection}>
            <h2>Similar Movies</h2>
            <div className={s.similarList}>
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};