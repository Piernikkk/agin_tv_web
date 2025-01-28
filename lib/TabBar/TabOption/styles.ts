import { cva } from "@/styled-system/css";

export const tabOptionContainer = cva({
    base: {
        display: 'flex',
        width: '100%',
        cursor: 'pointer',
        gap: '10px',
        alignItems: 'center',
        padding: '10px',
        borderRadius: '10px',
        transition: 'background 0.2s ease-in-out',
        '&:hover': {
            backgroundColor: '#ffffff1f',

        }
    },
    variants: {
        active: {
            true: {
                backgroundColor: 'dimmed.violet.6',
                '&:hover': {
                    backgroundColor: 'dimmed.violet.3',
                }
            }
        }
    }
})

export const tabOptionLabel = cva({
    base: {
        fontWeight: 400,
        color: 'text.0',
        fontSize: 16,
        textWrap: 'nowrap',
        transition: 'opacity 0.2s ease-in-out',
        opacity: 0,
    },
    variants: {
        header: {
            true: {
                fontWeight: 600,
                background: 'linear-gradient(5deg, rgb(163, 99, 240) 0%, rgb(85, 14, 143) 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                fontSize: 30,
            }
        },
        expanded: {
            true: {
                opacity: 1,
            },
        },
        active: {
            true: {
                fontWeight: 500,
                color: 'violet.7',
            }
        },
        size: {
            30: { fontSize: 30 },
            40: { fontSize: 40 },
            60: { fontSize: 60 },
            80: { fontSize: 80 },
        }
    }

})