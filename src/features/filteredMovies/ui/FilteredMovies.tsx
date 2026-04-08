// import {useState} from 'react';
// import s from './FilteredMovies.module.css';
// import {useGetGenreQuery, useGetMoviesQuery} from '@/features/filteredMovies/api/filteredMoviesApi.ts';
// import {MovieCard} from '@/features/categoryMovies/components/ MovieCard/ MovieCard.tsx';
// import {MoviesPagination} from '@/common/components/MoviesPagination/MoviesPagination.tsx';
// import SuperRange from '@/common/components/SuperRange/SuperRange.tsx';
// import {useDebounce} from '@/common/hooks/useDebounce.ts';
//
// export const FilteredMovies = () => {
//
//     const [open, setOpen] = useState(false);
//     const [selected, setSelected] = useState<number>(0);
//     const [page, setPage] = useState<number>(1);
//     const [value1, setValue1] = useState(0);
//     const [value2, setValue2] = useState(10);
//     const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
//
//     const debouncedValue1 = useDebounce(value1, 200);
//     const debouncedValue2 = useDebounce(value2, 200);
//
//     const list = ['Popularity ↓', 'Popularity ↑', 'Rating ↓', 'Rating ↑', 'Release Date ↓', 'Release Date ↑', 'Title A-Z', 'Title Z-A'];
//
//     const sortByMapping = [
//         'popularity.desc',
//         'popularity.asc',
//         'vote_average.desc',
//         'vote_average.asc',
//         'primary_release_date.desc',
//         'primary_release_date.asc',
//         'original_title.asc',
//         'original_title.desc',
//     ];
//
//     const onClickListItem = (i: number) => {
//         setSelected(i);
//         setOpen(false);
//         setPage(1);
//     };
//
//     const sortName = list[selected];
//     const currentSortBy = sortByMapping[selected];
//
//     const withGenres = selectedGenres.length > 0 ? selectedGenres.join('|') : undefined;
//
//
//     const {data: genresData} = useGetGenreQuery();
//
//     const {data, isLoading, error} = useGetMoviesQuery({
//         page,
//         sort_by: currentSortBy,
//         'vote_average.gte': debouncedValue1,
//         'vote_average.lte': debouncedValue2,
//         with_genres: withGenres,
//     });
//
//     const handleGenreToggle = (genreId: number) => {
//         setSelectedGenres(prev =>
//             prev.includes(genreId)
//                 ? prev.filter(id => id !== genreId) // убираем
//                 : [...prev, genreId] // добавляем
//         );
//         setPage(1); // сбрасываем страницу
//     };
//
//
//     const handlePageChange = (newPage: number) => {
//         setPage(newPage);
//     };
//
//     const change = (value: number | number[]) => {
//
//         if (Array.isArray(value)) {
//             setValue1(value[0]);
//             setValue2(value[1]);
//             setPage(1);
//         }
//     };
//
//     if (isLoading) {
//         return <div className={s.loading}>Loading movies...</div>;
//     }
//
//     if (error) {
//         return <div className={s.error}>Error loading movies: {error.toString()}</div>;
//     }
//
//     return (
//         <div className={s.container}>
//             <div className={s.filters}>
//                 <h3 className={s.title}>Filters / Sort</h3>
//
//                 {/* Блок сортировки */}
//                 <div className={s.sortLabel}>
//                     <div className={s.sortLabelText}>Sort<br/> by</div>
//                     <div className={s.sortWrapper}>
//                         <div className={s.optionName} onClick={() => setOpen(!open)}>
//                             {sortName}
//                         </div>
//                         {open && (
//                             <div className={s.sortPopup}>
//                                 <ul>
//                                     {list.map((name, i: number) => (
//                                         <li
//                                             key={i}
//                                             onClick={() => onClickListItem(i)}
//                                             className={selected === i ? s.active : ''}>
//                                             {name}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//
//                 {/* Блок рейтинга */}
//                 <div className={s.ratingBlock}>
//                     <div className={s.ratingHeader}>
//                         <div className={s.ratingLabel}>Rating</div>
//                         <div className={s.ratingValues}>
//                             {value1.toFixed(1)} - {value2.toFixed(1)}
//                         </div>
//                     </div>
//                     <div className={s.sliderWrapper}>
//                         <SuperRange
//                             value={[value1, value2]}
//                             onChange={(_, value) => change(value)}
//                             min={0}
//                             max={10}
//                             step={0.1}
//                         />
//                     </div>
//                 </div>
//
//                 {/* Фильтр по жанрам */}
//                 <div className={s.genresList}>  {/* 👈 используем s.имя_класса */}
//                     {genresData?.genres.map(genre => (
//                         <button
//                             key={genre.id}
//                             onClick={() => handleGenreToggle(genre.id)}
//                             className={`${s.genreChip} ${selectedGenres.includes(genre.id) ? s.active : ''}`}
//                             //      ↑ базовый класс        ↑ активный класс если выбран
//                         >
//                             {genre.name}
//                         </button>
//                     ))}
//                 </div>
//
//             </div>
//
//             <div className={s.films}>
//                 <div className={s.moviesGrid}>
//                     {data?.results?.map((movie) => (
//                         <MovieCard key={movie.id} movie={movie}/>
//                     ))}
//                 </div>
//
//                 {data && (
//                     <MoviesPagination
//                         totalPages={data.total_pages}
//                         currentPage={page}
//                         onPageChange={handlePageChange}
//                         showTotal={true}
//                         totalResults={data.total_results}
//                     />
//                 )}
//             </div>
//         </div>
//     );
// };




import { useState } from 'react';
import s from './FilteredMovies.module.css';
import { useGetGenresQuery, useGetMoviesQuery } from '@/features/filteredMovies/api/filteredMoviesApi.ts';
import { MovieCard } from '@/features/categoryMovies/components/ MovieCard/ MovieCard.tsx';
import { MoviesPagination } from '@/common/components/MoviesPagination/MoviesPagination.tsx';
import SuperRange from '@/common/components/SuperRange/SuperRange.tsx';
import { useDebounce } from '@/common/hooks/useDebounce.ts';
import {NavButton} from '@/common/components/NavButton/NavButton.ts';

export const FilteredMovies = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(10);
    const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

    const debouncedValue1 = useDebounce(value1, 200);
    const debouncedValue2 = useDebounce(value2, 200);

    const list = ['Popularity ↓', 'Popularity ↑', 'Rating ↓', 'Rating ↑', 'Release Date ↓', 'Release Date ↑', 'Title A-Z', 'Title Z-A'];

    const sortByMapping = [
        'popularity.desc',
        'popularity.asc',
        'vote_average.desc',
        'vote_average.asc',
        'primary_release_date.desc',
        'primary_release_date.asc',
        'original_title.asc',
        'original_title.desc',
    ];

    const onClickListItem = (i: number) => {
        setSelected(i);
        setOpen(false);
        setPage(1);
    };

    const sortName = list[selected];
    const currentSortBy = sortByMapping[selected];

    const withGenres = selectedGenres.length > 0 ? selectedGenres.join('|') : undefined;

    const { data: genresData } = useGetGenresQuery();

    const { data, isLoading, error } = useGetMoviesQuery({
        page,
        sort_by: currentSortBy,
        'vote_average.gte': debouncedValue1,
        'vote_average.lte': debouncedValue2,
        with_genres: withGenres,
    });

    const handleGenreToggle = (genreId: number) => {
        setSelectedGenres(prev =>
            prev.includes(genreId)
                ? prev.filter(id => id !== genreId)
                : [...prev, genreId]
        );
        setPage(1);
    };

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    const change = (value: number | number[]) => {
        if (Array.isArray(value)) {
            setValue1(value[0]);
            setValue2(value[1]);
            setPage(1);
        }
    };

    const resetHandler = ()=>{
        setValue1(0)
        setValue2(10)
        setSelectedGenres([])
        setPage(1);
        setOpen(false);
        setSelected(0)
    }

    if (isLoading) {
        return <div className={s.loading}>Loading movies...</div>;
    }

    if (error) {
        return <div className={s.error}>Error loading movies: {error.toString()}</div>;
    }

    return (
        <div className={s.container}>
            <div className={s.filters}>
                <h3 className={s.title}>Filters / Sort</h3>

                {/* Блок сортировки */}
                <div className={s.sortLabel}>
                    <div className={s.sortLabelText}>Sort<br/> by</div>
                    <div className={s.sortWrapper}>
                        <div className={s.optionName} onClick={() => setOpen(!open)}>
                            {sortName}
                        </div>
                        {open && (
                            <div className={s.sortPopup}>
                                <ul>
                                    {list.map((name, i: number) => (
                                        <li
                                            key={i}
                                            onClick={() => onClickListItem(i)}
                                            className={selected === i ? s.active : ''}
                                        >
                                            {name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Блок рейтинга */}
                <div className={s.ratingBlock}>
                    <div className={s.ratingHeader}>
                        <div className={s.ratingLabel}>Rating</div>
                        <div className={s.ratingValues}>
                            {value1.toFixed(1)} - {value2.toFixed(1)}
                        </div>
                    </div>
                    <div className={s.sliderWrapper}>
                        <SuperRange
                            value={[value1, value2]}
                            onChange={(_, value) => change(value)}
                            min={0}
                            max={10}
                            step={0.1}
                        />
                    </div>
                </div>

                {/* Фильтр по жанрам */}
                <div className={s.genresList}>
                    {genresData?.genres.map(genre => (
                        <button
                            key={genre.id}
                            onClick={() => handleGenreToggle(genre.id)}
                            className={`${s.genreChip} ${selectedGenres.includes(genre.id) ? s.active : ''}`}
                        >
                            {genre.name}
                        </button>
                    ))}
                </div>

                <NavButton onClick={resetHandler} sx={{
                    backgroundColor: "#1976d2",
                    marginLeft: 0,
                    '&:hover': {
                        backgroundColor: "#1666b5",
                    }
                }}>Reset filters</NavButton>


            </div>

            <div className={s.films}>
                <div className={s.moviesGrid}>
                    {data?.results?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>

                {data && (
                    <MoviesPagination
                        totalPages={data.total_pages}
                        currentPage={page}
                        onPageChange={handlePageChange}
                        showTotal={true}
                        totalResults={data.total_results}
                    />
                )}
            </div>
        </div>
    );
};
