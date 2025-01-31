import MovieTileBaseComponent from "@/lib/MovieTile/MovieTileBaseComponent";
import { TEpisode } from "@/lib/types/TEpisode";
import Text from "../Text";
import { episodeContainer } from "./styles";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Episode({ cover_url, name, description, season, episode, sources, tmdb_movie_id }: TEpisode) {
    const router = useRouter();
    const watch = useCallback(() => {
        if (!sources || sources.length <= 0) return;
        router.push(`/app/movies/${tmdb_movie_id}/episodes/${season},${episode}`);
    }, [sources, tmdb_movie_id, season, episode]);

    return (
        <div onClick={watch} className={episodeContainer({ disabled: !sources || sources.length <= 0 })}>
            <MovieTileBaseComponent
                height="full"
                episode={{ cover_url, movie_name: name }}
            />
            <div>

                <Text size={'sm'} weight={300} color={2}> S{season.toString().padStart(2, '0')}E{episode.toString().padStart(2, '0')}</Text>
                <Text size={'lg'} lineClamp={1} weight={400}>{name}</Text>
                <Text size={'sm'} weight={300} color={2} lineClamp={2}>{description}</Text>
            </div>
        </div>
    )
}