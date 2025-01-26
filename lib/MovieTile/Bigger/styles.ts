import { cva } from "@/styled-system/css";

export const MovieTileDetails = cva({
    base: {
        height: 'fit-content',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        zIndex: 1,
        opacity: 0,
        paddingInline: '10px',
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        transition: 'opacity 0.3s ease',
    },
    variants: {
        visible: {
            true: {
                opacity: 1,
            }
        }
    }
});