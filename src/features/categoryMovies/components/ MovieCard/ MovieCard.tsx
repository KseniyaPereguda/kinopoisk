import { useState } from 'react';
import s from './MovieCard.module.css'
import type {Movie} from '@/common/types/movie.ts';

import {FavoriteIcon} from '@/assets/icons';
import {useNavigate} from 'react-router';
import {useFavorites} from '@/common/hooks/useFavorites.ts';
import type {FavoriteMovie} from '@/common/types/favorite.ts';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

type MovieCardProps = {
    movie: Movie | FavoriteMovie;
}

export const MovieCard = ({movie}: MovieCardProps) => {

    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [isHeartHovered, setIsHeartHovered] = useState(false);

    const { isFavorite, toggleFavorite } = useFavorites();

    const movieId = movie.id;
    const movieTitle = movie.title;
    const moviePoster = 'poster_path' in movie
        ? movie.poster_path
        : movie.posterUrl;
    const movieRating = 'vote_average' in movie
        ? movie.vote_average
        : movie.voteAverage;
    const isFav = isFavorite(movieId);

    const formatRating = (rating: number) => {
        return rating?.toFixed(1) || '0.0';
    };

    const getRatingClass = (rating: number) => {
        if (rating >= 7) return s.ratingHigh;
        if (rating >= 5) return s.ratingMedium;
        return s.ratingLow;
    };

    const favoriteHandle = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const favoriteMovie = {
            id: movieId,
            title: movieTitle,
            posterUrl: moviePoster,
            voteAverage: movieRating
        };

        toggleFavorite(favoriteMovie);
    }

    const handleCardClick = () => {
        navigate(`/movie/${movie.id}`);
    }

    const getHeartColor = () => {
        if (isFav) return '#ff4d4d';
        if (isHeartHovered) return '#ff4d4d';
        return 'white';
    };

    return (
        <div
            className={s.movie}
            onClick={handleCardClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={s.card}>
                <div className={s.posterContainer}>
                    {moviePoster  ? (
                        <img
                            src={`${IMAGE_BASE_URL}${moviePoster}`}
                            alt={movieTitle}
                            className={s.poster}
                            loading="lazy"
                        />
                    ) : (
                        <div className={s.noPoster}>
                            <span>No poster</span>
                        </div>
                    )}
                </div>

                {(isFav || isHovered) && (
                    <button
                        className={`${s.favoriteButton} ${isFav ? s.active : ''}`}
                        onClick={favoriteHandle}
                        onMouseEnter={() => setIsHeartHovered(true)}
                        onMouseLeave={() => setIsHeartHovered(false)}
                    >
                        <FavoriteIcon
                            className={s.heartIcon}
                            width={16}
                            height={16}
                            fill={getHeartColor()}
                        />
                    </button>
                )}

                <div className={`${s.rating} ${getRatingClass(movieRating)}`}>
                    {formatRating(movieRating)}
                </div>

            </div>
            <h3 className={s.movieTitle}>{movieTitle}</h3>
        </div>
    )
}