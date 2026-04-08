
export type Movie = {
    id: number;
    title: string;
    backdrop_path: string | null;
    overview: string;
    poster_path: string | null;
    release_date: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    runtime?: number;
    genres?: {
        id: number;
        name: string;
    }[];
}

export type MoviesResponse = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export type MoviesQueryParams = {
    page: number;
    sort_by?: string;
    'vote_average.gte'?: number;
    'vote_average.lte'?: number;
    with_genres?: string;
    [key: string]: unknown;
}

export type GenresResponse = {
    genres: {
        id: number;
        name: string;
    }[];
}

// common/types/movie.ts

export type CastMember = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

export type CrewMember = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
}

export type CreditsResponse = {
    id: number;
    cast: CastMember[];
    crew: CrewMember[];
}