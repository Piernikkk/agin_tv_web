import { TMovie } from "@/lib/types/TMovie";
import MovieTile from "..";
import { movieTileDetailsButtons, movieTileTopInfo } from "../Bigger/styles";
import { IconPlayerPlayFilled, IconPlus } from "@tabler/icons-react";
import Button from "@/lib/components/Button";
import Text from "@/lib/components/Text";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

interface LibraryMovieTileProps extends TMovie {
    onPlusClick?: MouseEventHandler<HTMLDivElement>,
}
export default function LibraryMovieTile({ name, horizontal_cover_url, tmdb_id, genres, onPlusClick }: LibraryMovieTileProps) {
    const router = useRouter();
    return (
        <MovieTile
            onClick={() => router.push(`/app/movies/${tmdb_id}`)}
            episode={{ movie_name: name, cover_url: horizontal_cover_url, tmdb_movie_id: tmdb_id }}
        >
            <div className={movieTileTopInfo}>
                <div className={movieTileDetailsButtons}>
                    <Button icon={IconPlayerPlayFilled} color="#000" contrast />
                    {onPlusClick && <Button icon={IconPlus} color="#fff" onClick={onPlusClick} />}
                </div>
            </div>
            <Text lineClamp={1} size="xd" weight={600}>{name}</Text>
            <Text lineClamp={1} size="xxs" weight={300}>{genres?.map((genre, index) => index != 0 ? " • " + genre.name : genre.name)}</Text>

        </MovieTile>
    )
}