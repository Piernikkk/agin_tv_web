import Text from "@/lib/components/Text"
import { TSlide } from ".."
import { logoImage, SlideBackgroundFiller, SlideContainer, SlideDescription, SlideImage } from "./styles"


export type SlideProps = {
    slides: TSlide[],
    activeSlide: number,

}

export default function Slide({ slides, activeSlide }: SlideProps) {
    return (
        <div className={SlideContainer}>
            <img src={slides[activeSlide].background_url} alt={slides[activeSlide].name} className={SlideImage} />
            <div className={SlideBackgroundFiller} />
            <div className={SlideDescription({ padding: !!slides[activeSlide].logo_url })}>
                {!slides[activeSlide].logo_url && <Text weight={600} size="xxl">{slides[activeSlide].name}</Text>}
                {slides[activeSlide].logo_url && <img src={slides[activeSlide].logo_url} className={logoImage} />}
                <Text size="md">{slides[activeSlide].description}</Text>
            </div>
        </div>
    )
}