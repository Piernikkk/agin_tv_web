import { TGenre } from "./TGenre";

export interface TMovie {
    _id?: string;
    name: string;
    original_name?: string;
    description: string;
    tv?: boolean;
    air_date: Date;
    vertical_cover_url?: string;
    horizontal_cover_url?: string;
    background_url?: string;
    logo_url?: string;
    tmdb_id: string;
    genres: TGenre[];
    seasons: {
        season_number: number;
        name: string;
        air_date: Date;
        description: string;
        vertical_cover_url: string;
    }[];
    // episodes: mongoose.Types.ObjectId[];
}