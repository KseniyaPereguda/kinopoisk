import {useFavorites} from '@/common/hooks/useFavorites.ts';
import {MovieCard} from '@/features/categoryMovies/components/ MovieCard/ MovieCard.tsx';
import s from './Favorites.module.css'

export const Favorites = () => {
    const { favorites } = useFavorites();

    if (favorites.length === 0) {
        return <div>No favorites yet. Add some movies!</div>;
    }

    return (
        <div>
            <h1 className={s.header}>My Favorite Movies</h1>
            <div className={s.moviesGrid}>
                {favorites?.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}