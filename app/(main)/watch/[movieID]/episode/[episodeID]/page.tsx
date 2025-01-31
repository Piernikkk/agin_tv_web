'use client'
import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { playerContainer, playerVideo } from "./styles";
import useApi from "@/lib/hooks/useApi";
import { apiUrl } from "@/lib/config";
import { TEpisode } from "@/lib/types/TEpisode";
import { AxiosResponse } from "axios";

export default function Watch() {
    // const [loading, setLoading] = useState(true);
    const params = useParams();
    const videoRef = useRef<HTMLVideoElement>(null);
    const api = useApi();


    useEffect(() => {
        (async () => {
            if (!api) {
                return;
            }
            if (!videoRef.current) {
                console.log('Video element not found');
                return;
            }
            if (typeof params.episodeID == 'object' || typeof params.movieID == 'object' || !params.episodeID || !params.movieID) {
                console.log('Invalid episode or movie ID');
                return;
            }

            const episode: AxiosResponse<TEpisode> = await api?.get(`/movies/${decodeURIComponent(params.movieID)}/episodes/${decodeURIComponent(params.episodeID)}`);
            if (!episode || !episode.data?.sources) return;

            videoRef.current.src = `${apiUrl}/files/stream/${episode?.data?.sources[0]}`;

        })();
    }, [api]);

    return (
        <div className={playerContainer}>
            {/* {loading && <Loader />} */}
            <video ref={videoRef} controls className={playerVideo} />

        </div>
    )
}