'use client'
import React, { useState } from "react";
import Slide from "./Slide";
import { CarouselContainer } from "./styles";
import { IconChevronLeft } from "@tabler/icons-react";
import CarouselButton from "./CarouselButton";

export type TSlide = {
    background_url: string,
    logo_url?: string,
    name?: string,
    description?: string
}

export interface CarouselProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    slides: TSlide[],

}

export default function Carousel({ slides, ...props }: CarouselProps) {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div {...props} className={CarouselContainer}>
            <Slide activeSlide={activeSlide} slides={slides} />
        </div>
    )
}