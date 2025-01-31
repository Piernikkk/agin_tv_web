import { TEpisode } from "./TEpisode"
import { TMovie } from "./TMovie"

export interface TFile {
    path: string,
    _id: string,
    original_name: string,
    is_public?: boolean,
    episode: TEpisode,
    movie: TMovie,
    user: {
        _id: string,
        username: string,
    },
    created_at: Date,
    url?: string,
    quality?: string,
    sub?: string[],
    dub?: string[],
}