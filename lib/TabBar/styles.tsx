import { css } from "@/styled-system/css";

export const windowContainer = css({
    display: 'flex',
    height: '100%',
    zIndex: 1,
    maxWidth: '100vw',
})

export const tabBarContainer = css({
    borderRightWidth: '1px',
    borderRightColor: 'border',
    width: '250px',
    minW: '250px',
    height: '100%',
    padding: '25px',
    display: 'flex',
    flexDir: 'column',
    gap: '20px',
})