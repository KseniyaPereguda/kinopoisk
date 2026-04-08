// src/features/categoryMovies/components/MovieCardSkeleton/MovieCardSkeleton.tsx
import Skeleton from '@mui/material/Skeleton';
import s from './MovieCardSkeleton.module.css';

export const MovieCardSkeleton = () => {
    return (
        <div className={s.skeletonCard}>
            {/* Постер */}
            <Skeleton
                variant="rectangular"
                width="100%"
                height={280}
                animation="wave"
                className={s.skeletonPoster}
            />
            {/* Название */}
            <Skeleton
                variant="text"
                width="90%"
                height={24}
                animation="wave"
                className={s.skeletonTitle}
            />
            {/* Рейтинг */}
            <Skeleton
                variant="text"
                width="40%"
                height={20}
                animation="wave"
            />
        </div>
    );
};