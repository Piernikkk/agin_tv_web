import { css } from "@/styled-system/css";

export const SlideContainer = css({
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: 'linear-gradient(45deg, rgba(2,0,36,0.8477591720281863) 0%, rgba(0,0,0,0) 100%)',
});

export const SlideBackgroundFiller = css({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'linear-gradient(20deg, rgba(0, 0, 0, 0.61) 0%, rgba(0,0,0,0) 100%)'
});

export const SlideImage = css({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
    display: 'block',
});

export const SlideDescription = css({
    position: 'absolute',
    bottom: 0,
    left: 0,
    maxWidth: '50%',
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    zIndex: 2,
});