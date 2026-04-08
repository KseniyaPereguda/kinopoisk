import { baseApi } from '@/app/api/baseApi';
import type {GenresResponse, MoviesQueryParams, MoviesResponse} from '@/common/types/movie';

export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query<MoviesResponse, MoviesQueryParams>({
            query: (params) => ({
                url: 'discover/movie',
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    page: params.page,
                    sort_by: params.sort_by || 'popularity.desc',
                    'vote_average.gte': params['vote_average.gte'] ?? 0,
                    'vote_average.lte': params['vote_average.lte'] ?? 10,
                    ...(params.with_genres && { with_genres: params.with_genres }),
                },
            }),
            providesTags: ['Movies'],
        }),
        getGenres: builder.query<GenresResponse, void>({
            query: () => ({
                url: 'genre/movie/list',
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                },
            }),
            providesTags: ['Movies'],
        }),

    }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = movieApi;



