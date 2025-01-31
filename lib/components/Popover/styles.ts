import { css, cva } from "@/styled-system/css"

export const targetStyles = css({
    position: "relative",
    maxWidth: 'fit-content',
})

export const popverBackground = css({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 200,
})

export const popoverWrapper = css({
    zIndex: 201,
    maxWidth: 'fit-content',
})

export const contentStyles = cva({
    base: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        left: 0,
        border: `1px solid`,
        right: 0,
        transform: `translateY(calc(100% + 10px)) scale(0.95)`,
        transformOrigin: "top",
        opacity: 0,
        visibility: "hidden",
        transition: "all 0.3s ease",
        backgroundColor: 'tile.0',
        borderRadius: '10px',
    },
    variants: {
        opened: {
            true: {
                transform: `translateY(calc(100% + 10px)) scale(1)`,
                opacity: 1,
                visibility: "visible",
            }
        }
    }
})

export const paperStyles = css({
    backgroundColor: 'tile.0',
    borderRadius: '10px',
    border: `1px solid`,
    borderColor: 'border',
})