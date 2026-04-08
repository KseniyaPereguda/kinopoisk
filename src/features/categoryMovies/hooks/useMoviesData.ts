import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery
} from '@/features/categoryMovies/api/movieApi.ts';

export const useMoviesData = () => {
    const popular = useGetPopularMoviesQuery(1);
    const topRated = useGetTopRatedMoviesQuery(1);
    const upcoming = useGetUpcomingMoviesQuery(1);
    const nowPlaying = useGetNowPlayingMoviesQuery(1);

    return {
        popular: popular.data?.results?.slice(0, 6) || [],
        topRated: topRated.data?.results?.slice(0, 6) || [],
        upcoming: upcoming.data?.results?.slice(0, 6) || [],
        nowPlaying: nowPlaying.data?.results?.slice(0, 6) || [],
        popularLoading: popular.isLoading,
        popularError: popular.error,
        topRatedLoading: topRated.isLoading,
        topRatedError: topRated.error,
        nowPlayingLoading: nowPlaying.isLoading,
        nowPlayingError: nowPlaying.error,
        upcomingLoading: upcoming.isLoading,
        upcomingError: upcoming.error,
    }


}