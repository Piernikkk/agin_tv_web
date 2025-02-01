import { css, cva } from "@/styled-system/css";

export const drawerHeaderStyles = css({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
});

export const drawerContainer = cva({
    base: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        // height: '100%',
        width: 300,
        zIndex: 2000,
        padding: '10px',
        transform: `translateX(100%)`,
        transition: 'all 0.3s ease-in-out',
        // backgroundColor: '#121212',
        backdropFilter: 'blur(100px) brightness(.6)',
        boxShadow: '0px 7px 30px #00000029',
        borderLeft: '1px solid #ffffff10',
    },
    variants: {
        opened: {
            true: {
                transform: `translateX(0)`,
            }
        },
    }
})