import MovieTile, { TMovieTile } from "..";

interface LibraryMovieTileProps extends TMovieTile {
    parentPosition?: { x: number, y: number, width: number, height: number },
    setHovered: React.Dispatch<React.SetStateAction<boolean>>,
    hovered: boolean,
}

export default function LibraryMovieTile({ }: LibraryMovieTileProps) {

    return (
        <MovieTile>

        </MovieTile>
    )
}