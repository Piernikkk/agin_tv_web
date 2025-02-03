import { Dispatch, RefObject, SetStateAction, useCallback, useEffect, useState } from "react"

export type usePausedType = [boolean, { play: () => void; pause: () => void; toggle: () => void }]

export default function usePause(videoRef: RefObject<HTMLVideoElement | null>, setShowControls: Dispatch<SetStateAction<boolean>>, defaultState?: boolean,): usePausedType {
    const [paused, setPaused] = useState(defaultState || false);

    const pause = useCallback(() => {
        setPaused(true);
        setShowControls(true);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    }, [videoRef]);

    const play = useCallback(() => {
        setPaused(false);
        setShowControls(false);
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, [videoRef]);

    useEffect(() => {
        if (!videoRef.current) {
            return
        }



        const changeToPlay = () => { setPaused(false); console.log('play'); }
        const changeToPause = () => { setPaused(true); console.log('pause'); }
        videoRef?.current?.addEventListener("play", changeToPlay)
        videoRef?.current?.addEventListener("pause", changeToPause)

        return () => {
            videoRef?.current?.removeEventListener("play", changeToPlay)
            videoRef?.current?.removeEventListener("pause", changeToPause)
        }
    }, [videoRef?.current]);

    const toggle = useCallback(() => {
        setPaused((state) => {
            const newState = !state;
            if (videoRef.current) {
                if (newState) {
                    videoRef.current.pause();
                } else {
                    videoRef.current.play();
                }
            } else {
                console.log("error XD");
            }
            return newState;
        });
    }, [videoRef]);

    return [paused, { play, pause, toggle }]
}