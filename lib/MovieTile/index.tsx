import { movieTileContainer } from "./styles";

export type TMovieTile = {
    background_url: string;
    name: string;
}

export default function MovieTile({ background_url, name }: TMovieTile) {
    return (
        <div className={movieTileContainer}>

        </div>
    )
}