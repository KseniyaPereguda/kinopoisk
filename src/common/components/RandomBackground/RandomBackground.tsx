import React, {useEffect, useState} from 'react';
import {useGetPopularMoviesQuery} from '../../../features/categoryMovies/api/movieApi.ts';
import styles from './RandomBackground.module.css';

// Базовый URL для изображений TMDB
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

type RandomBackgroundProps = {
    children: React.ReactNode;
}

export const RandomBackground: React.FC<RandomBackgroundProps> = ({children}) => {

    const {data, error, isLoading} = useGetPopularMoviesQuery(1);

    const [backgroundUrl, setBackgroundUrl] = useState('');

    useEffect(() => {

        if (!data?.results || data.results.length === 0) return;

        if (backgroundUrl) return;

        const moviesWithBackdrop = data.results.filter(movie => movie.backdrop_path);
        if (moviesWithBackdrop.length > 0) {
            const randomIndex = Math.floor(Math.random() * moviesWithBackdrop.length);
            const randomMovie = moviesWithBackdrop[randomIndex];

            setBackgroundUrl(`${IMAGE_BASE_URL}${randomMovie.backdrop_path}`);
        }

    }, [data, backgroundUrl]);


    if (isLoading) {
        return <div className={styles.loading}>Загрузка фона...</div>;
    }

    if (error) {
        console.error('Ошибка загрузки фильмов:', error);
        return (
            <div className={styles.error} style={{backgroundColor: '#1a1a2e'}}>
                {children}
            </div>
        );
    }

    return (
        <>
            <div
                className={styles.background}
                style={{backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : 'none'}}
            />
            <div className={styles.overlay}/>
            <div className={styles.content}>
                {children}
            </div>
        </>
    );
};