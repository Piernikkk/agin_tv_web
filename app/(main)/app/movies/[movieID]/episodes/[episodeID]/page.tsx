'use client'
import useApi from "@/lib/hooks/useApi";
import { TEpisode } from "@/lib/types/TEpisode";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MovieInfoContainer, MovieInfoSlideButtons, MovieInfoSlideContainer } from "../../styles";
import { SlideBackgroundFiller, SlideDescription, SlideElementsContainer, SlideImage } from "@/lib/home/Carousel/Slide/styles";
import Text from "@/lib/components/Text";
import Button from "@/lib/components/Button";
import { IconPlayerPlayFilled, IconPlus } from "@tabler/icons-react";
import SourceComponent from "@/lib/components/SourceComponent";
import { linksContainer } from "./styles";

export default function EpisodePage() {
    const { movieID, episodeID } = useParams();
    const [episode, setEpisode] = useState<TEpisode | null>(null);

    const router = useRouter();
    const api = useApi();

    const refresh = useCallback(async () => {
        if (!movieID || !api || !episodeID || typeof episodeID == 'object') return;

        const tmp = episodeID.split(',');
        const episodeNumber = parseInt(tmp[1]);
        const seasonNumber = parseInt(tmp[0]);


        if (!episode || episode.tmdb_movie_id != movieID || episode.season != seasonNumber || episode.episode != episodeNumber) {
            const fetchMovie = await api.get(`/movies/${movieID}/episodes/${episodeID}`);
            console.log(fetchMovie?.data);
            setEpisode(fetchMovie?.data);
        }
    }, [api, movieID, episodeID])

    useEffect(() => {
        (async () => {
            await refresh();
        })();
    }, [movieID, episodeID, api]);

    return (
        <div>
            <div className={MovieInfoSlideContainer}>
                <img src={episode?.cover_url} alt={episode?.name} className={SlideImage()} />
                <div className={SlideBackgroundFiller} />
                <div className={SlideElementsContainer}>
                    <div className={SlideDescription({ padding: false })}>
                        <Text weight={600} size="xxl">{episode?.name || 'Loading...'}</Text>
                        <Text lineClamp={5} size="md">{episode?.description || 'Loading...'}</Text>
                        <div className={MovieInfoSlideButtons}>
                            <Button label="Play" weight={600} contrast color="#000000" large icon={IconPlayerPlayFilled} onClick={() => router.push(`/watch/${movieID}/episodes/${episodeID}`)} />
                            <Button label="Save " weight={600} large icon={IconPlus} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={MovieInfoContainer}>
                <Text size="xl" weight={600}>Sources: </Text>
                <div className={linksContainer}>
                    {episode?.sources.map((source, index) => (
                        <SourceComponent onClick={() => router.push(`/watch/${movieID}/episodes/${episodeID}?source=${source._id}`)} refresh={refresh} key={index} {...source} />

                    ))}
                </div>
            </div>
        </div>
    )
}