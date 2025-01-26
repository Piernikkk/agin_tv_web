import { css } from "@/styled-system/css";

export const continueWatchingContainer = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
    padding: '10px',
});

export const movieTilesList = css({
    // width: '100%',
    display: 'flex',
    gap: '20px',
    overflowX: 'scroll',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
        display: 'none'
    }
})