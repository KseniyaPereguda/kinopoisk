import s from './MoviesGridSkeleton.module.css';
import {MovieCardSkeleton} from '@/common/components/MovieCardSkeleton/MovieCardSkeleton.tsx';

type MoviesGridSkeletonProps = {
    count?: number;
}

export const MoviesGridSkeleton = ({count = 10}: MoviesGridSkeletonProps) => {
    return (
        <div className={s.grid}>
            {Array(count).fill(0).map((_, index) => (
                <MovieCardSkeleton key={index}/>
            ))}
        </div>
    );
};