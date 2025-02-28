import { cva } from "@/styled-system/css";

export const buttonContainer = cva({
    base: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        maxWidth: 'fit-content',
        transition: 'background-color 0.2s ease, border 0.2s ease',
        borderRadius: '5px',
        padding: '5px',
        justifyContent: 'center',
        borderColor: 'border',
        borderWidth: '1px',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'contrast.0',
        }
    },
    variants: {
        contrast: {
            true: {
                backgroundColor: 'contrast.0',
                borderWidth: '0px',
                '&:hover': {
                    backgroundColor: 'contrast.1',
                },
            }
        },
        text: {
            true: {
                padding: '10px',
            }
        },
        large: {
            true: {
                minWidth: '200px',
            }
        }
    }
})