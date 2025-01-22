import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { CarouselControlsArrows, CarouselControlsContainer } from "./styles";
import { TSlide } from "..";
import React from "react";

export type CarouselControlsProps = {
    onLeftClick?: () => void,
    onRightClick?: () => void,
    slides: TSlide[],
    activeSlide: number,
    setActiveSlide: React.Dispatch<React.SetStateAction<number>>,
}

export default function CarouselControls({ onLeftClick, onRightClick, }: CarouselControlsProps) {
    return (
        <div className={CarouselControlsContainer}>
            <div className={CarouselControlsArrows}>
                <IconChevronLeft onClick={onLeftClick} size={50} color="#fff" />
                <IconChevronRight onClick={onRightClick} size={50} color="#fff" />
            </div>
        </div>
    )
}