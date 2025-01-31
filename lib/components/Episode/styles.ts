import { cva } from "@/styled-system/css";

export const episodeContainer = cva({
    base: {
        maxWidth: '500px',
        gap: '10px',
        opacity: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        transition: 'opacity 0.2s ease'
    },
    variants: {
        disabled: {
            true: {
                opacity: 0.5,
            }
        }
    }
})