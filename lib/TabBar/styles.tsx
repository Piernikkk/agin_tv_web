import { css, cva } from "@/styled-system/css";

export const windowContainer = css({
    display: 'flex',
    height: '100%',
    // position: 'relative',
    maxWidth: '100vw',
    marginLeft: '77px',
    overflow: 'hidden',
})

export const tabBarContainer = cva({
    base: {
        borderRightWidth: '1px',
        backgroundColor: 'background',
        borderRightColor: 'border',
        overflow: 'hidden',
        width: '77px',
        height: '100%',
        padding: '15px',
        display: 'flex',
        flexDir: 'column',
        gap: '15px',
        transition: 'width 0.2s ease-in-out',
        position: 'absolute',
        zIndex: 50,
        left: 0,
        top: 0,
        bottom: 0,
    },
    variants: {
        opened: {
            true: {
                width: '250px',
            }
        }
    }
})