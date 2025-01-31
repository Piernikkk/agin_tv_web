import MovieTileBaseComponent from "@/lib/MovieTile/MovieTileBaseComponent";
import { TEpisode } from "@/lib/types/TEpisode";
import Text from "../Text";
import { episodeContainer } from "./styles";

export default function Episode({ cover_url, name, description, season, episode, sources }: TEpisode) {
    return (
        <div className={episodeContainer({ disabled: !sources || sources.length <= 0 })}>
            <MovieTileBaseComponent
                height="full"
                episode={{ cover_url, movie_name: name }}
            />
            <div>

                <Text size={'sm'} weight={300} color={2}> S{season.toString().padStart(2, '0')}E{episode.toString().padStart(2, '0')}</Text>
                <Text size={'lg'} weight={400}>{name}</Text>
                <Text size={'sm'} weight={300} color={2} lineClamp={2}>{description}</Text>
            </div>
        </div>
    )
}