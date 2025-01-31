import { css } from '@/styled-system/css';

export const dropzoneStyles = css({
    border: '2px dashed rgba(255, 255, 255, 0.59)',
    borderRadius: '10px',
    padding: '20px',
    height: '100%',
    width: '100%',
    textAlign: 'center',
    cursor: 'pointer',
    gap: '10px',
    color: 'text.3',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '5px'
});

export const filePreviewContainer = css({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
})