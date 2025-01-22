import React, { useState } from "react";
import Text from "@/lib/components/Text";
import { TSlide } from "..";
import { logoImage, SlideBackgroundFiller, SlideContainer, SlideDescription, SlideElementsContainer, SlideImage } from "./styles";
import CarouselControls from "../Controls";

export type SlideProps = {
    slides: TSlide[],
    activeSlide: number,
    setSlide: React.Dispatch<React.SetStateAction<number>>,
}

export default function Slide({ slides, activeSlide, setSlide }: SlideProps) {
    const [prevSlide, setPrevSlide] = useState(activeSlide);
    const [animate, setAnimate] = useState(false);

    function animationHandler(slideValue: number) {
        if (prevSlide == slideValue) {
            return;
        }
        setAnimate(true);
        const slideTimeout = setTimeout(() => setSlide(slideValue), 200);
        const animationTimeout = setTimeout(() => setAnimate(false), 300);
        setPrevSlide(slideValue);

        return () => {
            clearTimeout(slideTimeout);
            clearTimeout(animationTimeout);
        }
    }

    function slideChange(right?: boolean) {
        if (right == true) {
            if (activeSlide === slides.length - 1) {
                animationHandler(0);
            } else {
                animationHandler(activeSlide + 1);
            }
        } else {
            if (activeSlide === 0) {
                animationHandler(slides.length - 1);
            } else {
                animationHandler(activeSlide - 1);
            }
        }
    }

    return (
        <div className={SlideContainer}>
            <img src={slides[activeSlide].background_url} alt={slides[activeSlide].name} className={SlideImage({ animate })} />
            <div className={SlideBackgroundFiller} />
            <div className={SlideElementsContainer}>
                <div className={SlideDescription({ padding: !!slides[activeSlide].logo_url, animate })}>
                    {!slides[activeSlide].logo_url && <Text weight={600} size="xxl">{slides[activeSlide].name}</Text>}
                    {slides[activeSlide].logo_url && <img src={slides[activeSlide].logo_url} className={logoImage} />}
                    <Text size="md">{slides[activeSlide].description}</Text>
                </div>
                <CarouselControls slides={slides} activeSlide={activeSlide} setActiveSlide={setSlide} onLeftClick={() => slideChange(false)} onRightClick={() => slideChange(true)} />
            </div>
        </div>
    )
}