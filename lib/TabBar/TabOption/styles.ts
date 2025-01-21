import { css } from "@/styled-system/css";

export const tabOptionContainer = css({
    display: 'flex',
    width: '100%',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '15px',
    transition: 'background 0.2s ease-in-out',
    '&:hover': {
        backgroundColor: '#ffffff1f',

    }
})