// Список эндпоинтов для исключения из глобального индикатора
import {useSelector} from 'react-redux';
import type {RootState} from '@/app/model/store.ts';

const excludedEndpoints = [
    'getMovieDetails',
    'getMovieActors',
    'getSimilarMovie',
]

export const useGlobalLoading = () => {
    return useSelector((state: RootState) => {
        // Получаем все активные запросы из RTK Query API
        const queries = Object.values(state.baseApi.queries || {})
        const mutations = Object.values(state.baseApi.mutations || {})

        const hasActiveQueries = queries.some(query => {
            if (query?.status !== 'pending') return
            if (excludedEndpoints.includes(query.endpointName)) {
                const completedQueries = queries.filter(q => q?.status === 'fulfilled')
                return completedQueries.length > 0
            }
        })

        const hasActiveMutations = mutations.some(mutation => mutation?.status === 'pending')

        return hasActiveQueries || hasActiveMutations
    })
}