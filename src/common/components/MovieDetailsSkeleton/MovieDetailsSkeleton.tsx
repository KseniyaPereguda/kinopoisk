import Skeleton from '@mui/material/Skeleton';
import s from './MovieDetailsSkeleton.module.css';

export const MovieDetailsSkeleton = () => {
    return (
        <div className={s.container}>
            <Skeleton
                variant="rectangular"
                width={80}
                height={36}
                className={s.backButton}
            />
            <div className={s.content}>
                <Skeleton
                    variant="rectangular"
                    width={350}
                    height={525}
                    className={s.poster}
                />
                <div className={s.info}>
                    <Skeleton variant="text" width="70%" height={50} />
                    <div className={s.meta}>
                        <Skeleton variant="text" width={80} height={30} />
                        <Skeleton variant="text" width={80} height={30} />
                        <Skeleton variant="text" width={80} height={30} />
                    </div>
                    <div className={s.genres}>
                        <Skeleton variant="rectangular" width={80} height={30} />
                        <Skeleton variant="rectangular" width={100} height={30} />
                        <Skeleton variant="rectangular" width={70} height={30} />
                    </div>
                    <Skeleton variant="text" width="100%" height={80} />
                    <Skeleton variant="text" width="100%" height={20} />
                    <Skeleton variant="text" width="90%" height={20} />
                </div>
            </div>
            <div className={s.castSection}>
                <Skeleton variant="text" width={200} height={40} />
                <div className={s.castGrid}>
                    {Array(6).fill(0).map((_, index) => (
                        <div key={index} className={s.castCard}>
                            <Skeleton variant="rectangular" width={150} height={225} />
                            <Skeleton variant="text" width="90%" height={20} />
                            <Skeleton variant="text" width="70%" height={16} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};