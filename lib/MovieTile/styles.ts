import { cva } from "@/styled-system/css";

export const movieTileContainer = cva({
    base: {
        height: '200px',
        width: 'fit-content',
        minWidth: 'fit-content',
        aspectRatio: 16 / 9,
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative',
        opacity: 1,
    },
    variants: {
        hovered: {
            true: {
                opacity: 0,
            }
        }
    }
});
