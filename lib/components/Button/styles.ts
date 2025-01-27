import { cva } from "@/styled-system/css";

export const buttonContainer = cva({
    base: {
        cursor: 'pointer',
        maxWidth: 'fit-content',
        transition: 'background-color 0.2s ease, borderColor 0.2s ease',
        borderRadius: '5px',
        padding: '5px',
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
        }
    }
})