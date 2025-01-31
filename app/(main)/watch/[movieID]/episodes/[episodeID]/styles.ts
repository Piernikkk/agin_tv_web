import { css, cva } from "@/styled-system/css";

export const playerContainer = cva({
    base: {
        overflow: 'hidden',
        backgroundColor: '#000000',
        position: 'relative',
        width: '100vw',
        height: '100vh',
    },
    variants: {
        showControls: {
            false: {
                cursor: 'none',
            }
        }
    }
});

export const playerVideo = css({
    width: '100%',
    height: '100%',
})

export const videoInfoContainer = cva({
    base: {
        position: 'fixed',
        zIndex: 200,
        left: 0,
        right: 0,
        top: 0,
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingTop: '10px',
        display: 'flex',
        opacity: 0,
        alignItems: 'center',
        gap: '10px',
        visibility: 'hidden',
        transition: 'all .2s ease-in-out',
    },
    variants: {
        showControls: {
            true: {
                opacity: 1,
                visibility: 'visible',
            }
        }
    }
});

export const gradientBackground = cva({
    base: {
        background: 'linear-gradient(0deg, rgb(0, 0, 0, .5) 0%, rgba(0, 0, 0, 0) 100%)',
        position: 'absolute',
        left: 0,
        right: 0,
        height: '200px',
        opacity: 0,
        zIndex: 1,
        visibility: 'hidden',
        transition: 'all .2s ease-in-out',
    },
    variants: {
        rotated: {
            true: {
                background: 'linear-gradient(180deg, rgb(0, 0, 0, .5) 0%, rgba(0, 0, 0, 0) 100%)',
                top: 0,
            },
            false: {
                bottom: 0,
            }
        },
        showControls: {
            true: {
                opacity: 1,
                visibility: 'visible',
            }
        }
    }
});

export const videoControlsContainer = cva({
    base: {
        zIndex: 2,
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingBottom: '10px',
        display: 'flex',
        opacity: 0,
        alignItems: 'center',
        gap: '10px',
        visibility: 'hidden',
        transition: 'all .2s ease-in-out',
    },
    variants: {
        showControls: {
            true: {
                opacity: 1,
                visibility: 'visible',
            }
        }
    }
});

export const timelineContainer = css({
    height: '7px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderRadius: '20px',
    flex: 1,
});

export const timeline = css({
    backgroundColor: '#ffffff40',
    height: '3px',
    width: '100%',
    maxWidth: '100%',
    borderRadius: '20px',
    position: 'relative',
    transition: 'all .1s ease-in-out',
});

