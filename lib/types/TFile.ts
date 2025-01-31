import { TEpisode } from "./TEpisode"
import { TMovie } from "./TMovie"

export interface TFile {
    path: string,
    original_name: string,
    is_public?: boolean,
    episode: TEpisode,
    movie: TMovie,
    // user: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: 'User',
    // },
    created_at: Date,
    url?: string,
    quality?: string,
    sub?: string[],
    dub?: string[],
}