import Text from "@/lib/components/Text";
import MovieTile, { TMovieTile } from "@/lib/MovieTile";
import { continueWatchingContainer, movieTilesList } from "./styles";

type ContinueWatchingProps = {
    tiles: TMovieTile[],
    name: string
}


export default function Section({ name, tiles }: ContinueWatchingProps) {
    return (
        <div className={continueWatchingContainer}>
            <Text size="lg" weight={600}>{name}</Text>
            <div className={movieTilesList}>
                {tiles.map((tile, index) => <MovieTile key={index} {...tile} />)}
            </div>
        </div>
    );
}