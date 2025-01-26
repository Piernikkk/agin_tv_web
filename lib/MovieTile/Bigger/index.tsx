/* eslint-disable @next/next/no-img-element */
import { css } from "@/styled-system/css";
import { TMovieTile } from "..";
import { MovieTileBiggerContainer } from "./styles";
import { useEffect, useState, useRef } from "react";

export interface MovieTileBiggerProps extends TMovieTile {
    description?: string,
    parentPosition?: { x: number, y: number, width: number, height: number },
    setHovered: React.Dispatch<React.SetStateAction<boolean>>,
    hovered: boolean,
}

export default function MovieTileBigger({ background_url, name, position, duration, parentPosition = { x: 0, y: 0, width: 0, height: 0 }, setHovered }: MovieTileBiggerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (containerRef.current) {
            const size = containerRef.current.getBoundingClientRect();
            console.log(size);

            setContainerSize(size);
        }

        const timeout = setTimeout(() => { setVisible(true) }, 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    useEffect(() => {
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
        <div ref={containerRef} className={MovieTileBiggerContainer({ visible })} style={{ left: parentPosition?.x - ((containerSize.width - parentPosition?.width) / 2), top: parentPosition?.y - ((containerSize.height - parentPosition?.height) / 2) }}>
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
    )

}