import { css } from "@/styled-system/css";

export const libraryContainer = css({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: '15px 30px',
});

export const libraryElementsContainer = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px'
})