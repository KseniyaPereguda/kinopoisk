// common/hooks/useFavorites.ts
import { useState } from 'react';
import type { FavoriteMovie } from '@/common/types/favorite';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<FavoriteMovie[]>(() => {
        const saved = localStorage.getItem('favorites');
        try {
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    const isFavorite = (id: number) => favorites.some(fav => fav.id === id);

    const addToFavorites = (movie: FavoriteMovie) => {
        if (isFavorite(movie.id)) return;
        const updated = [...favorites, movie];
        setFavorites(updated);
        localStorage.setItem('favorites', JSON.stringify(updated));
    };

    const removeFromFavorites = (id: number) => {
        const updated = favorites.filter(fav => fav.id !== id);
        setFavorites(updated);
        localStorage.setItem('favorites', JSON.stringify(updated));
    };

    const toggleFavorite = (movie: FavoriteMovie) => {
        if (isFavorite(movie.id)) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    };

    return { favorites, addToFavorites, removeFromFavorites, isFavorite, toggleFavorite };
};