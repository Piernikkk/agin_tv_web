import { css, cva } from "@/styled-system/css";

export const SlideContainer = css({
    width: '100%',
    height: '100%',
    position: 'relative',
});

export const SlideBackgroundFiller = css({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0,0,0,0) 100%)'
});

export const SlideImage = css({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
    display: 'block',
    transition: '200ms opacity ease-in-out',
    transitionDelay: '200ms',
});

export const logoImage = css({
    maxWidth: '50%',
    display: 'block',
    objectFit: 'cover',
    zIndex: 1,
})

export const SlideElementsContainer = css({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
})

export const SlideDescription = cva({
    base: {
        maxWidth: '50%',
        padding: '8% 3%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        zIndex: 2,
        gap: '10px',
    },
    variants: {
        padding: {
            true: {
                gap: '20px'
            }
        }
    }

});