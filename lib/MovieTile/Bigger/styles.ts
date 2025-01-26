import { cva } from "@/styled-system/css";

export const MovieTileBiggerContainer = cva({
    base: {
        height: '200px',
        width: 'fit-content',
        minWidth: 'fit-content',
        aspectRatio: 16 / 9,
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'fixed',
        opacity: 1,
        transition: 'transform 0.3s ease-in-out',
        transformOrigin: 'center',
    },
    variants: {
        visible: {
            true: {
                transform: 'scale(1.3)',
            }
        }
    }
});