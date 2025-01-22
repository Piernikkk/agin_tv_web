import Text from "@/lib/components/Text"
import { TSlide } from ".."
import { logoImage, SlideBackgroundFiller, SlideContainer, SlideDescription, SlideElementsContainer, SlideImage } from "./styles"
import CarouselControls from "../Controls"


export type SlideProps = {
    slides: TSlide[],
    activeSlide: number,
    setSlide: React.Dispatch<React.SetStateAction<number>>,
}

export default function Slide({ slides, activeSlide, setSlide }: SlideProps) {

    function slideChange(right?: boolean) {
        if (right == true) {
            if (activeSlide === slides.length - 1) {
                setSlide(0);
            } else {
                setSlide(activeSlide => activeSlide + 1);
            }
        } else {
            if (activeSlide === 0) {
                setSlide(slides.length - 1);
            } else {
                setSlide(activeSlide => activeSlide - 1);
            }
        }
    }

    return (
        <div className={SlideContainer}>
            <img src={slides[activeSlide].background_url} alt={slides[activeSlide].name} className={SlideImage} />
            <div className={SlideBackgroundFiller} />
            <div className={SlideElementsContainer}>
                <div className={SlideDescription({ padding: !!slides[activeSlide].logo_url })}>
                    {!slides[activeSlide].logo_url && <Text weight={600} size="xxl">{slides[activeSlide].name}</Text>}
                    {slides[activeSlide].logo_url && <img src={slides[activeSlide].logo_url} className={logoImage} />}
                    <Text size="md">{slides[activeSlide].description}</Text>
                </div>
                <CarouselControls slides={slides} activeSlide={activeSlide} setActiveSlide={setSlide} onLeftClick={() => slideChange(false)} onRightClick={() => slideChange(true)} />
            </div>
        </div>
    )
}