import {baseQuery} from '@/app/api/baseQuery.ts';
import {createApi} from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: ['Movies', 'Movie', 'Credits'],
    baseQuery,
    endpoints: () => ({}),
})


