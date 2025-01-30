import { css, cva } from "@/styled-system/css";

export const pageHeaderContainer = cva({
    base: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    variants: {
        options: {
            true: {
                justifyContent: 'space-between',
            }
        }
    }
});

export const pageHeaderTitle = css({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',

})

export const optionsContainer = css({
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
})

export const optionStyle = css({
    display: 'flex',
    cursor: 'pointer',
    gap: '10px',
    alignItems: 'center',
})

export const optionIconStyle = cva({
    base: {
        transition: 'color 0.2s ease-in-out',
    },
    variants: {
        active: {
            true: {
                color: 'text.0'
            }, false: {
                color: 'text.2'
            }
        }
    }
});