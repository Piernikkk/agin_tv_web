'use client'
import Text from "@/lib/components/Text";
import { logoImage, SlideBackgroundFiller, SlideDescription, SlideElementsContainer, SlideImage } from "@/lib/home/Carousel/Slide/styles";
import useApi from "@/lib/hooks/useApi";
import { TMovie } from "@/lib/types/TMovie";
import { useParams, useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react";
import { episodesContainer, MovieInfoContainer, MovieInfoSlideButtons, MovieInfoSlideContainer, seasonPickerContainer, seasonPickerItem } from "./styles";
import Button from "@/lib/components/Button";
import { IconPlayerPlayFilled, IconPlus } from "@tabler/icons-react";
import Popover from "@/lib/components/Popover";
import Input from "@/lib/components/Input";
import Episode from "@/lib/components/Episode";
import SourceComponent from "@/lib/components/SourceComponent";
import { linksContainer } from "./episodes/[episodeID]/styles";

export default function MovieInfoPage() {
    const { movieID } = useParams();
    const [movie, setMovie] = useState<TMovie | null>(null);
    const api = useApi();
    const [isTV, setIsTV] = useState(false);
    const router = useRouter();
    const [season, setSeason] = useState<TMovie['seasons'][0] | undefined>(undefined);

    const refresh = useCallback(async () => {
        const tv = movieID?.[0] == 't'
        setIsTV(tv);
        if (!movieID || !api) return;

        if (!movie || movie.tmdb_id != movieID) {
            const fetchMovie = await api.get(`/movies/${movieID}`, { params: { sources: !isTV } });
            console.log(fetchMovie?.data);

            setMovie(fetchMovie?.data);
            setSeason(fetchMovie?.data?.seasons.find((s: TMovie['seasons'][0]) => s.season_number == 1));
        }
    }, [movieID, api]);

    useEffect(() => {
        (async () => {
            await refresh();
        })();
    }, [movieID, api]);

    const [opened, setOpened] = useState(false);


    return (
        <div>
            <div className={MovieInfoSlideContainer}>
                <img src={movie?.background_url} alt={movie?.name} className={SlideImage()} />
                <div className={SlideBackgroundFiller} />
                <div className={SlideElementsContainer}>
                    <div className={SlideDescription({ padding: !!movie?.logo_url })}>
                        {!movie?.logo_url && <Text weight={600} size="xxl">{movie?.name || 'Loading...'}</Text>}
                        {movie?.logo_url && <img src={movie?.logo_url} className={logoImage} />}
                        <Text lineClamp={5} size="md">{movie?.description || 'Loading...'}</Text>
                        <div className={MovieInfoSlideButtons}>
                            <Button label="Play" weight={600} contrast color="#000000" large icon={IconPlayerPlayFilled} />
                            <Button label="Save " weight={600} large icon={IconPlus} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={MovieInfoContainer}>
                {isTV ? <><Text size="xl" weight={600}>Episodes</Text>
                    <Popover opened={opened} setOpened={setOpened}>
                        <Popover.Target>
                            <Input width={'300px'} style={{ caretColor: 'transparent' }} readOnly value={`${season?.season_number}: ${season?.name}`} />
                        </Popover.Target>
                        <Popover.Content>
                            <div className={seasonPickerContainer}>
                                {movie?.seasons?.map((season, index) => <div onClick={() => { setSeason(season); setOpened(false) }} className={seasonPickerItem} key={index}>
                                    <Text>{season.season_number}: {season.name}</Text>
                                </div>)}
                            </div>
                        </Popover.Content>
                    </Popover>
                    <div className={episodesContainer}>
                        {
                            movie?.episodes.filter(m => m?.season == season?.season_number).map((episode, index) => <Episode key={index} {...episode} />)
                        }
                    </div></> : <><Text size="xl" weight={600}>Sources: </Text><div className={linksContainer}>
                        {movie?.episodes[0]?.sources.map((source, index) => (
                            <SourceComponent onClick={() => router.push(`/watch/${movieID}/episodes/0,0?source=${source._id}`)} refresh={refresh} key={index} {...source} />

                        ))}
                    </div></>}
            </div>
        </div>
    )
}