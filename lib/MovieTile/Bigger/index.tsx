/* eslint-disable @next/next/no-img-element */
import { TMovieTile } from "..";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import MovieTileBaseComponent from "../MovieTileBaseComponent";
import { MovieTileDetails } from "./styles";

export interface MovieTileBiggerProps extends TMovieTile {
    description?: string,
    parentPosition?: { x: number, y: number, width: number, height: number },
    setHovered: React.Dispatch<React.SetStateAction<boolean>>,
    hovered: boolean,
    children?: React.ReactNode,
}

export default function MovieTileBigger({ episode: { cover_url, movie_name }, children, position, duration, onClick, parentPosition = { x: 0, y: 0, width: 0, height: 0 }, setHovered }: MovieTileBiggerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => { setVisible(true) }, 0);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    useLayoutEffect(() => {
        const element = containerRef.current;
        if (!element) return;

        const updatePositionAndSize = () => {
            const rect = element.getBoundingClientRect();
            setContainerSize({ width: rect.width, height: rect.height });
        };

        updatePositionAndSize();

        const resizeObserver = new ResizeObserver(() => {
            updatePositionAndSize();
        });
        resizeObserver.observe(element);

        return () => {
            resizeObserver.disconnect();
        };
    }, [containerRef]);

    useEffect(() => {
        const container = containerRef.current;
        const setFalse = () => {
            setVisible(false);
            const timeout = setTimeout(() => setHovered(false), 300);
            return () => {
                clearTimeout(timeout);
            }
        };

        if (container) {
            container.addEventListener('mouseleave', setFalse);
        }

        return () => {
            if (container) {
                container.removeEventListener('mouseleave', setFalse);
            }
        }
    }, [containerRef]);



    return (
        <MovieTileBaseComponent
            ref={containerRef}
            episode={{ cover_url, movie_name }}
            position={position}
            duration={duration}
            hovered={visible}
            onClick={onClick}
            bigger
            style={{ left: parentPosition?.x - ((containerSize.width - parentPosition?.width) / 2), top: parentPosition?.y - ((containerSize.height - parentPosition?.height) / 2) }}
        >
            <div className={MovieTileDetails({ visible })}>
                {children}
                {/* <div className={movieTileTopInfo}>
                    <div className={movieTileDetailsButtons}>
                        <Button icon={IconPlayerPlayFilled} color="#000" contrast />
                        <Button icon={IconPlus} color="#fff" />
                        <Button icon={IconX} color="#fff" />
                    </div>
                    {(position && duration) && <Text size="xxs" weight={500}>{Math.round(position / 60)} of {Math.round(duration / 60)} min</Text>}
                </div>
                <Text size="xd" weight={600}>{movie_name}</Text>
                <Text size="xxs" weight={300}>S{season?.toString().padStart(2, '0')}E{episode?.toString().padStart(2, '0')} • {name}</Text> */}
            </div>
        </MovieTileBaseComponent>
    )

}