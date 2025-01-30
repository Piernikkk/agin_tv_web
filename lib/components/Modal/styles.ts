import { css, cva } from "@/styled-system/css";

export const modalBackground = cva({
    base: {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        opacity: 0,
        visibility: 'hidden',
        zIndex: 100,
        backgroundColor: '#000000cc',
        transition: 'all 0.2s ease',
    },
    variants: {
        opened: { true: { opacity: 1, visibility: 'visible' } }
    }
});

export const modalContainer = css({
    padding: '30px 30px 10px 30px',
    backgroundColor: 'tile.1',
    zIndex: 101,
    border: '1px solid',
    borderRadius: '15px',
    borderColor: 'border',
    width: '1000px',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
});

export const modalHeader = css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '10px',
    alignItems: 'center',
    marginBottom: '10px',
})

export const modalTitle = css({
    display: 'flex',
    gap: '15px',
    alignItems: 'center'
})

