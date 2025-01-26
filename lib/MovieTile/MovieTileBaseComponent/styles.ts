import { cva } from "@/styled-system/css";

export const movieTileBaseContainer = cva({
    base: {
        height: 'fit-content',
        width: 'fit-content',
        minWidth: 'fit-content',
        borderRadius: '10px',
        // overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
    },
    variants: {
        bigger: {
            true: {
                position: 'fixed',
                transition: 'transform 0.3s ease-in-out, height 0.3s ease-in-out',
                transformOrigin: 'center',
            },
        },
        hovered: {
            true: {
                opacity: 0,
            }
        }
    },
    compoundVariants: [
        {
            bigger: true,
            hovered: true,
            css: {
                transform: 'scale(1.3)',
                opacity: 1,
                backgroundColor: 'tile.1'

            }
        },
    ]
});

export const movieTileImage = cva({
    base: {
        aspectRatio: 16 / 9,
        height: '200px',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '10px',
    },
    variants: {
        hovered: {
            true: {
                borderBottomRadius: '0px',
            }
        }
    }
})