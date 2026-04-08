import {Route, Routes, useLocation} from 'react-router';
import {MainPage} from '@/app/ui/MainPage/MainPage.tsx';
import {CategoryMovies} from '@/features/categoryMovies/ui/CategoryMovies.tsx';
import {FilteredMovies} from '@/features/filteredMovies/ui/FilteredMovies.tsx';
import {Search} from '@/features/search/ui/Search.tsx';
import {Favorites} from '@/features/favorites/ui/Favorites.tsx';
import {PageNotFound} from '@/common/components';
import {useEffect} from 'react';
import {MovieDetails} from '@/features/MovieDetails/MovieDetails.tsx';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return null;
};

export const Path = {
    Main: '/',
    Category: '/category/:category',
    Filtered: '/filtered',
    Search: '/search',
    Favorites: '/favorites',
    MovieDetails: '/movie/:id',
    NotFound: '*',
} as const

export const Routing = () => (
    <>
        <ScrollToTop />
        <Routes>
            <Route path={Path.Main} element={<MainPage />} />
            <Route path={Path.Category} element={<CategoryMovies />} />
            <Route path={Path.Filtered} element={<FilteredMovies />} />
            <Route path={Path.Search} element={<Search />} />
            <Route path={Path.Favorites} element={<Favorites />} />
            <Route path={Path.MovieDetails} element={<MovieDetails />} />
            <Route path={Path.NotFound} element={<PageNotFound />} />
        </Routes>
    </>

)