'use client'
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useApi from "@/lib/hooks/useApi";
import { apiUrl } from "@/lib/config";
import { TEpisode } from "@/lib/types/TEpisode";
import { AxiosResponse } from "axios";
import PlayerButton from "@/lib/player/PlayerButton";
import { IconArrowLeft, IconPlayerPauseFilled, IconPlayerPlayFilled } from "@tabler/icons-react";
import VidoInfo from "@/lib/player/VideoInfo";
import usePause from "@/lib/hooks/usePaused";
import classes from './watch.module.css';
import Loader from "@/lib/player/Loader";

export default function Watch() {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const api = useApi();
    const params = useParams();
    const searchParams = useSearchParams();

    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const [episode, setEpisode] = useState<TEpisode>();
    const [isTV, setIsTV] = useState(false);

    const [showControls, setShowControls] = useState(true);
    const [paused, playback] = usePause(videoRef);
    const [time, setTime] = useState(0);
    const [fullscreen, setfullscreen] = useState(false);

    const videoSkipAmount = 5;


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

            setIsTV(decodeURIComponent(params.movieID)[0] === 't');

            const episode: AxiosResponse<TEpisode> = await api?.get(`/movies/${decodeURIComponent(params.movieID)}/episodes/${decodeURIComponent(params.episodeID)}`);
            if (!episode || !episode.data?.sources) return;
            setEpisode(episode.data);

            const sourceParam = searchParams.get('source');

            if (sourceParam) {
                videoRef.current.src = `${apiUrl}/files/stream/${sourceParam}`;
                return;
            }

            videoRef.current.src = `${apiUrl}/files/stream/${episode?.data?.sources[0]?._id}`;

        })();
    }, [api]);

    function changePosition(p) {
        if (!videoRef.current) return;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setShowControls(true);

        timeoutRef.current = setTimeout(() => setShowControls(false), 1000);
        videoRef.current.currentTime = videoRef?.current?.currentTime + p;
        const percent = (videoRef?.current?.currentTime) / videoRef?.current?.duration;
        timelineRef?.current?.style?.setProperty("--progress-position", percent.toString());

    }

    function toggleFullScreenMode() {
        if (document.fullscreenElement == null) {
            containerRef?.current?.requestFullscreen()
            setfullscreen(true);
        } else {
            document.exitFullscreen()
            setfullscreen(false);
        }
    }

    useEffect(() => {
        const keydown = (e: { key: string; }) => {
            const tagName = document.activeElement?.tagName.toLowerCase() ?? ''

            if (tagName === "input") return

            switch (e.key.toLowerCase()) {
                case ' ':
                    if (tagName === "button") return
                case 'k':
                    playback.toggle();
                    break;
                case 'f':
                    toggleFullScreenMode();
                    break;
                case 'arrowleft':
                    changePosition(-videoSkipAmount);
                    break;
                case 'arrowright':
                    changePosition(videoSkipAmount);
                    break;
            }
        }

        document.addEventListener('keydown', keydown);
        videoRef?.current?.addEventListener("click", playback.toggle)

        return () => {
            document.removeEventListener('keydown', keydown);
            videoRef?.current?.removeEventListener("click", playback.toggle)
        }
    }, [paused]);

    function SavePosition() {
        if (!videoRef.current?.src || !api) return;
        if (!videoRef.current.currentTime || !videoRef.current.duration) return;
        const { movieID, episodeID } = params;
        if (!movieID || !episodeID) return;
        try {
            if (Math.floor(videoRef.current.currentTime) == 0) return;
            api.patch(`/movies/${movieID}/episodes/${episodeID}/position`, {
                position: Math.floor(videoRef.current.currentTime),
                duration: Math.floor(videoRef.current.duration),
                link: videoRef.current?.src,
            });
        } catch (error) {
            console.log('Position cannot be saved: ' + error);
        }
    }

    useEffect(() => {
        if (!videoRef.current?.src || paused) return;
        const saveInterval = setInterval(() => {
            console.log('Paused: ' + paused + '\n activeLink: ' + !videoRef.current?.src);
            SavePosition();
        }, 30000);

        return () => {
            clearInterval(saveInterval);
        }
    }, [paused, videoRef.current?.src, params.movieID, params.episodeID]);

    useEffect(() => {
        function Loading() {
            setLoading(true);
        }
        function notLoading() {
            setLoading(false)
        }

        videoRef?.current?.addEventListener("waiting", Loading)
        videoRef?.current?.addEventListener("canplay", notLoading)

        return () => {
            videoRef?.current?.removeEventListener("waiting", Loading)
            videoRef?.current?.addEventListener("canplay", notLoading)

        }
    }, [])

    useEffect(() => {
        const onTimeUpdate = () => {
            setTime(videoRef?.current?.currentTime ?? 0);
            const percent = videoRef.current ? videoRef.current.currentTime / videoRef.current.duration : 0;
            timelineRef?.current?.style?.setProperty("--progress-position", percent.toString())
        }

        videoRef?.current?.addEventListener('timeupdate', onTimeUpdate);

        return () => {
            videoRef?.current?.removeEventListener('timeupdate', onTimeUpdate);
        }
    }, []);

    useEffect(() => {
        if (!timelineRef?.current || !containerRef.current || !videoRef.current) return;

        let isScrubbing = false;
        let wasPaused: boolean = false;

        const UpdateTimeline = (e: MouseEvent) => {
            const rect = timelineRef.current?.getBoundingClientRect();
            if (!rect) return;

            const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
            if (timelineRef.current) {
                timelineRef.current.style.setProperty("--preview-position", `${percent}`);
            }

            if (isScrubbing) {
                e.preventDefault();
                if (timelineRef.current) {
                    timelineRef.current.style.setProperty("--progress-position", `${percent}`);
                }
            }
        };

        const toggleScrubbing = (e: MouseEvent) => {
            const rect = timelineRef.current?.getBoundingClientRect();
            if (!rect) return;

            const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
            isScrubbing = (e.buttons & 1) === 1;

            containerRef.current?.classList.toggle("scrubbing", isScrubbing);
            if (isScrubbing) {
                wasPaused = videoRef.current?.paused ?? false;
                videoRef.current?.pause();
            } else {
                if (videoRef.current) {
                    videoRef.current.currentTime = percent * (videoRef.current.duration || 0);
                    timelineRef.current?.style.setProperty("--progress-position", `${percent}`);
                    if (!wasPaused) videoRef.current.play();
                }
            }

            UpdateTimeline(e);
        };

        const handleMouseUp = (e: MouseEvent) => {
            if (isScrubbing) toggleScrubbing(e);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (isScrubbing) UpdateTimeline(e);
        };

        timelineRef.current?.addEventListener("mousemove", UpdateTimeline);
        timelineRef.current?.addEventListener("mousedown", toggleScrubbing);
        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            timelineRef.current?.removeEventListener("mousemove", UpdateTimeline);
            timelineRef.current?.removeEventListener("mousedown", toggleScrubbing);
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className={`${classes.container} ${showControls ? '' : classes.noCursor}`} ref={containerRef}>
            {loading && <Loader />}
            <video ref={videoRef} autoPlay className={classes.video} />
            <div className={`${classes.videoInfo} ${showControls ? classes.show : ''} ${classes.animate}`}>
                <PlayerButton icon={IconArrowLeft} onClick={() => { router.back(); SavePosition(); }} /><VidoInfo name={episode?.movie_name} isTv={isTV} epName={episode?.name} season={episode?.season} episode={episode?.episode} />
            </div>
            <div className={`${classes.gradient} ${classes.animate} ${showControls ? classes.show : ''}`}></div>
            <div className={`${classes.gradient2} ${classes.animate} ${showControls ? classes.show : ''}`}></div>
            <div className={`${classes.videoControlsContainer} ${showControls ? classes.show : ''} ${classes.animate}`}>
                <PlayerButton icon={paused ? IconPlayerPlayFilled : IconPlayerPauseFilled} onClick={playback.toggle} />
                {/* <Volume videoRef={videoRef} /> */}
                <div className={classes.timelineContainer} ref={timelineRef}>
                    <div className={classes.timeline}>
                    </div>
                </div>
                {/* <PlayerButton icon={IconMessage} onClick={() => setDrawerOpen(!drawerOpen)} />
                        <PlayerButton icon={IconSettings} />
                        <PlayerButton icon={fullscreen ? IconMinimize : IconMaximize} onClick={toggleFullScreenMode} /> */}
                {/* <WatchBar progress={time / videoRef?.current?.duration} videoRef={videoRef} /> */}
            </div>
            {/* <Drawer title={'Links'} opened={drawerOpen} setOpened={setDrawerOpen}><ScrollArea h={'100%'} w={'100%'} pb={'25px'} type="never">{links?.map((l, i) => <Links label={l.label} onClick={() => { setactiveLink(l?.url); setDrawerOpen(false) }} active={l?.url == activeLink} quality={l.quality} sub={l?.sub} audio={l?.audio} type={l?.type} />)}</ScrollArea></Drawer> */}
        </div >
    )
}