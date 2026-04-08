import s from './MainPage.module.css'
import {RandomBackground} from '@/common/components/RandomBackground/RandomBackground.tsx';
import {SearchBar} from '@/common/components/SearchBar/SearchBar.tsx';
import {useNavigate} from 'react-router';
import {useMoviesData} from '@/features/categoryMovies/hooks/useMoviesData.ts';
import {MovieCategory} from '@/features/categoryMovies/components/MovieCategory/MovieCategory.tsx';


export const MainPage = () => {

    const navigate = useNavigate();

    const {
        popular,
        popularLoading,
        popularError,
        topRated,
        topRatedLoading,
        topRatedError,
        nowPlaying,
        nowPlayingLoading,
        nowPlayingError,
        upcoming,
        upcomingLoading,
        upcomingError
    } = useMoviesData()

    const handleViewMore = (category: string) => {
        navigate(`/category/${category}`);
    };


    return (
        <>
            <RandomBackground>
                <div className={s.main}>
                    <h1 className={s.title}>Welcome</h1>
                    <h3 className={s.text}>Browse highlighted titles from TMDB</h3>
                    <SearchBar/>
                </div>
            </RandomBackground>

            <div className={s.sectionContainer}>

                <MovieCategory
                    title="Popular Movies"
                    movies={popular}
                    isLoading={popularLoading}
                    error={popularError}
                    onViewMore={() => handleViewMore('popular')}
                />

                <MovieCategory
                    title="Top Rated Movies"
                    movies={topRated}
                    isLoading={topRatedLoading}
                    error={topRatedError}
                    onViewMore={() => handleViewMore('top-rated')}  // ← так
                />

                <MovieCategory
                    title="Upcoming Movies"
                    movies={upcoming}
                    isLoading={upcomingLoading}
                    error={upcomingError}
                    onViewMore={() => handleViewMore('upcoming')}  // ← так
                />

                <MovieCategory
                    title="Now Playing"
                    movies={nowPlaying}
                    isLoading={nowPlayingLoading}
                    error={nowPlayingError}
                    onViewMore={() => handleViewMore('now-playing')}  // ← так
                />

            </div>
        </>


    );
};