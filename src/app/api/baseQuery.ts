import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { handleErrors } from '@/common/utils/handleErrors.ts';

export const baseQuery: BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        prepareHeaders: (headers) => {
            const accessToken = localStorage.getItem('accessToken');

            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`);
            }

            return headers;
        },
    })(args, api, extraOptions);

    if (result.error) {
        handleErrors(result.error);
    }

    return result;
};