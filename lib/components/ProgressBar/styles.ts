import { css } from "@/styled-system/css";

export const progressBarContainer = css({
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '5px',
    overflow: 'hidden',
    marginTop: '10px',
    border: '1px solid',
    borderColor: 'border',
});

export const progressBarFill = css({
    height: '10px',
    backgroundColor: 'tile.1',
    transition: 'width 0.2s ease-in-out',
});