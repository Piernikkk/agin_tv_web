import { RefObject, useCallback, useState } from "react"

export type usePausedType = [boolean, { play: () => void; pause: () => void; toggle: () => void }]

export default function usePause(videoRef: RefObject<HTMLVideoElement | null>, defaultState?: boolean): usePausedType {
    const [paused, setPaused] = useState(defaultState || false);

    const pause = useCallback(() => {
        setPaused(true);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    }, [videoRef]);

    const play = useCallback(() => {
        setPaused(false);
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, [videoRef]);

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