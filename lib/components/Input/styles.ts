import { cva } from "@/styled-system/css";

export const inputLabel = cva({
    base: {
        fontSize: 14,
        color: 'text.0',
        marginBottom: 5,
    },
    variants: {
        large: {
            true: {
                fontSize: 18,
            }
        }
    }
});

export const inputWrapper = cva({
    base: {
        border: `1px solid border`,
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        paddingLeft: Icon ? large ? 20 : 16 : undefined,
        width: w,
        '&:focus-within': {
            border: `1px solid ${colors[6]}`,
        }
    },
    variants: {
        radius: {
            true: {
                borderRadius: 10,
            }
        },
        Icon: {

        }
    },
    compoundVariants: [
        {
            Icon: true,
            large: true,
            css: {

            }
        }
    ]
});