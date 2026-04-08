// features/MovieDetails/components/MovieCast.tsx

import s from './MovieCast.module.css';
import { useGetMovieActorsQuery } from '@/features/categoryMovies/api/movieApi.ts';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185';
const PLACEHOLDER_IMAGE = 'https://placehold.co/185x278?text=No+Photo';

type MovieCastProps = {
    movieId: number;
}

export const MovieCast = ({ movieId }: MovieCastProps) => {
    const { data: credits, isLoading, error } = useGetMovieActorsQuery(movieId, {
        skip: !movieId
    });

    if (isLoading) return <div className={s.loading}>Loading cast...</div>;
    if (error) return <div className={s.error}>Failed to load cast</div>;
    if (!credits?.cast) return null;

    const mainCast = [...credits.cast]
        .sort((a, b) => a.order - b.order)
        .slice(0, 6);

    return (
        <div className={s.castSection}>
            <h2>Cast</h2>
            <div className={s.castList}>
                {mainCast.map(actor => (
                    <div key={actor.id} className={s.castCard}>
                        <img
                            src={actor.profile_path
                                ? `${IMAGE_BASE_URL}${actor.profile_path}`
                                : PLACEHOLDER_IMAGE
                            }
                            alt={actor.name}
                            className={s.actorImage}
                        />

                        <div className={s.actorInfo}>
                            <div className={s.actorName}>{actor.name}</div>
                            <div className={s.characterName}>as {actor.character}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};