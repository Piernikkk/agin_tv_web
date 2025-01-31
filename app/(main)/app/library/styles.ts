import { css } from "@/styled-system/css";

export const libraryContainer = css({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '15px 30px',
});

export const libraryElementsContainer = css({
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', // Responsive grid
    gap: '20px',
});