/* eslint-disable @next/next/no-img-element */
"use client"
import { createPortal } from "react-dom";
import MovieTileBigger from "./Bigger";
import { useContext, useEffect, useRef, useState } from "react";
import { ContentRefContext } from "../TabBar";
import MovieTileBaseComponent from "./MovieTileBaseComponent";

export type TMovieTile = {
    background_url: string,
    name: string,
    episodeName?: string,
    position?: number,
    duration?: number,
    description?: string,
}


export default function MovieTile({ background_url, name, position, episodeName, duration }: TMovieTile) {
    const movieTileRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useContext(ContentRefContext);
    const [hovered, setHovered] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const [highlightPosition, setHighlightPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });

    useEffect(() => {
        const element = movieTileRef.current;
        if (!element) return;



        const updatePositionAndSize = () => {
            if (!contentRef?.current) {
                console.log('contentRef.current is undefined');

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
            {(hovered && contentRef?.current) && createPortal(<MovieTileBigger
                hovered={hovered}
                episodeName={episodeName}
                setHovered={setHovered}
                parentPosition={highlightPosition}
                background_url={background_url}
                name={name}
                position={position}
                duration={duration}
            />, contentRef?.current)}

            <MovieTileBaseComponent
                hovered={hovered}
                background_url={background_url}
                name={name}
                position={position}
                duration={duration}
                ref={movieTileRef} >

            </MovieTileBaseComponent>
        </>
    )
}