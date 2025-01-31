export interface TEpisode {
    season: number;
    episode: number;
    movie_name?: string;
    name: string;
    description: string;
    air_date: Date;
    cover_url?: string;
    tmdb_movie_id: string;
    duration?: number;
    // sources: mongoose.Types.ObjectId[];
}