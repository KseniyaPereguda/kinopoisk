import {useGetMovieDetailsQuery} from '@/features/categoryMovies/api/movieApi';
import s from './MovieDetails.module.css';
import {useNavigate, useParams} from 'react-router';
import {MovieCast} from '@/features/MovieDetails/components/MovieCast.tsx';
import {SimilarMovies} from '@/features/MovieDetails/components/SimilarMovie.tsx';
import {MovieDetailsSkeleton} from '@/common/components/MovieDetailsSkeleton/MovieDetailsSkeleton.tsx';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

export const MovieDetails = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const movieId = Number(id);

    const {data: movie, isLoading, error} = useGetMovieDetailsQuery(movieId);


    if (isLoading) {
        return <MovieDetailsSkeleton />;
    }

    if (error) {
        return <div className={s.error}>Error loading movie</div>;
    }

    if (!movie) {
        return <div className={s.notFound}>Movie not found</div>;
    }

    return (
        <div className={s.container}>

            <button onClick={() => navigate(-1)} className={s.backButton}>
                Back
            </button>

            <div className={s.content}>

                <img
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    className={s.poster}
                />

                <div className={s.info}>
                    <h1 className={s.title}>{movie.title}</h1>
                    <div className={s.meta}>
                        <span>Release year: {movie.release_date?.split('-')[0]}</span>
                        <span>⭐ {movie.vote_average?.toFixed(1)}</span>
                        <span>Runtime: {movie.runtime} min</span>
                    </div>

                    <p className={s.overview}>{movie.overview}</p>
                    <h3 className={s.subtitle}>Genres</h3>
                    <div className={s.genres}>

                        {movie.genres?.map(genre => (
                            <span key={genre.id} className={s.genre}>{genre.name}</span>
                        ))}
                    </div>


                </div>
            </div>

            <MovieCast movieId={movieId} />

            <SimilarMovies movieId={movieId} />
        </div>
    );
};