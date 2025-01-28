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
        border: `1px solid`,
        borderColor: 'border',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        borderRadius: '10px',
        // paddingLeft: Icon ? large ? 20 : 16 : undefined,
        width: '100%',
        '&:focus-within': {
            border: `1px solid`,
            borderColor: 'text.0'
        }
    },
    variants: {
        radius: {
            true: {
                borderRadius: '15px',
            }
        },
        Icon: {
            true: {
                paddingLeft: '16px',
            }
        },
        large: {
            true: {

            }
        }
    },
    compoundVariants: [
        {
            Icon: true,
            large: true,
            css: {
                paddingLeft: 20,
            }
        }
    ]
});

export const inputStyle = cva({
    base: {
        fontSize: 16,
        color: 'text.0',
        outline: 'none',
        border: 'none',
        backgroundColor: 'transparent',
        padding: '12px 16px',
        // paddingLeft: Icon ? large ? 10 : 6 : undefined,
        fontFamily: 'Poppins',
        width: '100%',
        height: '50px',
        flex: 1,
        '&:active': {
            outline: 'none',
        }
    },
    variants: {
        large: {
            true: {
                fontSize: 20,
                padding: '16px 20px',
            }
        },
        Icon: {
            true: {
                paddingLeft: '6px',
            }
        },
    },
    compoundVariants: [
        {
            Icon: true,
            large: true,
            css: {
                paddingLeft: '10px',
            }
        }
    ]
})