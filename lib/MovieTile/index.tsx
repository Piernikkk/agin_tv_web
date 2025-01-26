/* eslint-disable @next/next/no-img-element */
"use client"
import { css } from "@/styled-system/css";
import { movieTileContainer } from "./styles";
import { createPortal } from "react-dom";
import MovieTileBigger from "./Bigger";
import { useContext, useEffect, useRef, useState } from "react";
import { ContentRefContext } from "../TabBar";

export type TMovieTile = {
    background_url: string,
    name: string,
    position?: number,
    duration?: number,

}


export default function MovieTile({ background_url, name, position, duration }: TMovieTile) {
    const movieTileRef = useRef<HTMLDivElement>(null);
    const contentRef = useContext(ContentRefContext);
    const [hovered, setHovered] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const [highlightPosition, setHighlightPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });

    useEffect(() => {
        const element = movieTileRef.current;
        if (!element) return;



        const updatePositionAndSize = () => {
            if (!contentRef?.current || contentRef.current.scrollLeft == undefined) {
                return;
            }
            const rect = element.getBoundingClientRect();
            setHighlightPosition({ x: rect.x, y: rect.y, width: rect.width, height: rect.height });
        };

        updatePositionAndSize();

        const resizeObserver = new ResizeObserver(() => {
            updatePositionAndSize();
        });
        resizeObserver.observe(element);

        // window.addEventListener('scroll', updatePositionAndSize);
        contentRef?.current?.addEventListener('scroll', updatePositionAndSize);
        window.addEventListener('resize', updatePositionAndSize);

        return () => {
            resizeObserver.disconnect();
            contentRef?.current?.removeEventListener('scroll', updatePositionAndSize);
            window.removeEventListener('resize', updatePositionAndSize);
        };
    }, [contentRef]);

    useEffect(() => {
        const movieTile = movieTileRef.current;
        const setTrue = () => {
            timeoutRef.current = setTimeout(() => setHovered(true), 1000);
            return () => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
            }

        };

        const setFalse = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        }

        if (movieTile) {
            movieTile.addEventListener('mouseenter', setTrue)
            movieTile.addEventListener('mouseleave', setFalse);
        }

        return () => {
            if (movieTile) {
                movieTile.removeEventListener('mouseenter', setTrue);
                movieTile.removeEventListener('mouseleave', setFalse);
            }
        }
    }, [movieTileRef])




    return (
        <>
            {hovered && createPortal(<MovieTileBigger hovered={hovered} setHovered={setHovered} parentPosition={highlightPosition} background_url={background_url} name={name} position={position} duration={duration} />, document.body)}
            <div ref={movieTileRef} className={movieTileContainer({ hovered })}>
                {hovered && <div>nigger</div>}
                <img src={background_url} alt={name} className={css({ aspectRatio: 16 / 9, height: '100%' })} />
                {(position && duration) && <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '29px',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(73, 71, 71, 0) 100%)',
                    zIndex: 1,
                }}>
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        backgroundColor: '#FFFFFF',
                        height: '7px',
                        width: `${(position / duration) * 100 <= 100 ? (position / duration) * 100 : 100}%`,
                        transition: 'width 0.5s ease',
                    }} />
                </div>}
            </div >
        </>
    )
}