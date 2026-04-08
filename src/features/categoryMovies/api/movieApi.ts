import {baseApi} from '@/app/api/baseApi';
import type {CreditsResponse, Movie, MoviesResponse} from '@/common/types/movie';

export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPopularMovies: builder.query<MoviesResponse, number>({
            query: (page) => ({
                url: '/movie/popular',
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    // language: 'ru-RU',
                    page: page,
                },
            }),
            providesTags: ['Movies'],
        }),

        getTopRatedMovies: builder.query<MoviesResponse, number>({
            query: (page) => ({
                url: '/movie/top_rated',
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    // language: 'ru-RU',
                    page: page,
                },
            }),
            providesTags: ['Movies'],
        }),

        getUpcomingMovies: builder.query<MoviesResponse, number>({
            query: (page) => ({
                url: '/movie/upcoming',
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    // language: 'ru-RU',
                    page: page,
                },
            }),
            providesTags: ['Movies'],
        }),

        getNowPlayingMovies: builder.query<MoviesResponse, number>({
            query: (page) => ({
                url: '/movie/now_playing',
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    // language: 'ru-RU',
                    page: page,
                },
            }),
            providesTags: ['Movies'],
        }),


        getMovie: builder.query<MoviesResponse, { query: string; page: number }>({
            query: ({query, page}) => ({
                url: '/search/movie',
                params: {
                    query: query,
                    api_key: import.meta.env.VITE_API_KEY,
                    // language: 'ru-RU',
                    page: page,
                },
            }),
            providesTags: ['Movies'],

        }),

        getMovieDetails: builder.query<Movie, number>({
            query: (movieId) => ({
                url: `/movie/${movieId}`,
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    // language: 'ru-RU',
                },

            }),
            providesTags: ['Movie'],
        }),


        getMovieActors: builder.query<CreditsResponse, number>({
            query: (movieId) => ({
                url: `/movie/${movieId}/credits`,

                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    // language: 'ru-RU',
                },

            }),
            providesTags: ['Credits'],
        }),

        getSimilarMovie: builder.query<MoviesResponse, number>({
            query: (movieId) => ({
                url: `/movie/${movieId}/similar`,

                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    // language: 'ru-RU',
                },

            }),
            providesTags: ['Movie'],
        }),

    }),
});

export const {
    useGetPopularMoviesQuery,
    useGetMovieQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetNowPlayingMoviesQuery,
    useGetMovieDetailsQuery,
    useGetMovieActorsQuery,
    useGetSimilarMovieQuery
} = movieApi;