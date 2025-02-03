import Text from "@/lib/components/Text";
import MovieTile, { TMovieTile } from "@/lib/MovieTile";
import { continueWatchingContainer, movieTilesList } from "./styles";
import { movieTileDetailsButtons, movieTileTopInfo } from "@/lib/MovieTile/Bigger/styles";
import { IconInfoCircle, IconPlayerPlayFilled, IconPlus, IconX } from "@tabler/icons-react";
import Button from "@/lib/components/Button";
import { useRouter } from "next/navigation";

type ContinueWatchingProps = {
    tiles?: TMovieTile[],
    name: string,
}


export default function Section({ name, tiles }: ContinueWatchingProps) {
    const router = useRouter();

    return (
        <div className={continueWatchingContainer}>
            <Text size="lg" weight={600}>{name}</Text>
            <div className={movieTilesList}>
                {tiles && tiles?.map((tile, index) => <MovieTile key={index} {...tile} onClick={() => router.push(`/watch/${tile?.episode?.tmdb_movie_id}/episodes/${tile?.episode?.season},${tile?.episode?.episode}?source=${tile?.link}&position=${tile?.position}`)} >
                    <div className={movieTileTopInfo}>
                        <div className={movieTileDetailsButtons}>
                            <Button icon={IconPlayerPlayFilled} color="#000" contrast />
                            {/* <Button icon={IconPlus} color="#fff" /> */}
                            <Button icon={IconInfoCircle} onClick={(e) => { e.stopPropagation(); router.push(`/app/movies/${tile?.episode?.tmdb_movie_id}/episodes/${tile?.episode?.season},${tile?.episode?.episode}`) }} color="#fff" />
                        </div>
                        {(tile.position && tile.duration) && <Text size="xxs" weight={500}>{Math.round(tile.position / 60)} of {Math.round(tile.duration / 60)} min</Text>}
                    </div>
                    <Text size="xd" weight={600}>{tile?.episode?.movie_name}</Text>
                    <Text size="xxs" weight={300}>S{tile?.episode?.season?.toString().padStart(2, '0')}E{tile?.episode?.episode?.toString().padStart(2, '0')} • {tile?.episode?.name}</Text>
                </MovieTile>)}
            </div>
        </div>
    );
}