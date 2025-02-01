import { css } from "@/styled-system/css";

export const sourceTileContainer = css({
    // height: '60px',
    width: '100%',
    marginBottom: '10px',
    marginTop: '10px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    padding: '10px',
    paddingLeft: '10px',
    border: '1px solid #ffffff20',
    backgroundColor: '#ffffff05',
    // backdropFilter: 'blur(100px) brightness(.6)',
    boxShadow: '0px 7px 30px #00000029',
    "&:hover": {
        backgroundColor: '#ffffff10',
        cursor: 'pointer',
    },
    transition: 'all 0.2s ease-in-out',
});

export const sourceText = css({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginLeft: '5px',
    gap: '1px',
    paddingBottom: '4px'
})