import { css } from "@/styled-system/css";

export const MovieInfoSlideContainer = css({
    aspectRatio: '16/ 6.5',
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
});

export const MovieInfoSlideButtons = css({
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
});

export const MovieInfoContainer = css({
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 3%',
    gap: '20px',
});

export const seasonPickerContainer = css({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    gap: '5px',
    border: '1px solid ',
    borderColor: 'border',
    borderRadius: '10px',
    overflow: 'hidden',
    padding: '10px',
});

export const seasonPickerItem = css({
    width: '100%',
    display: 'flex',
    borderRadius: '5px',
    padding: '5px',
    justifyContent: 'center',
    alignItems: 'center',
    "&:hover": {
        backgroundColor: 'tile.1'
    }
});

export const episodesContainer = css({
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Responsive grid
    gap: '20px',
});