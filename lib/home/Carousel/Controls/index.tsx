import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { CarouselControlsArrows, CarouselControlsContainer } from "./styles";
import { TSlide } from "..";
import React from "react";
import { css } from "@/styled-system/css";

export type CarouselControlsProps = {
    onLeftClick?: () => void,
    onRightClick?: () => void,
    slides: TSlide[],
    activeSlide: number,
    setActiveSlide: React.Dispatch<React.SetStateAction<number>>,
}

export default function CarouselControls({ onLeftClick, onRightClick }: CarouselControlsProps) {
    return (
        <div className={CarouselControlsContainer}>
            <div className={CarouselControlsArrows}>
                <div onClick={onLeftClick} className={css({ cursor: 'pointer', zIndex: 3 })}>
                    <IconChevronLeft size={50} color="#fff" />
                </div>
                <div onClick={onRightClick} className={css({ cursor: 'pointer', zIndex: 3 })}>
                    <IconChevronRight size={50} color="#fff" />
                </div>
            </div>
        </div>
    )
}