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
        transition: 'height 0.3s ease-in-out',
    },
    variants: {
        visible: {
            true: {
                height: '260px'
            }
        }
    }
});