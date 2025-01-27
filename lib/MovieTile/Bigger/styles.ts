import { cva } from "@/styled-system/css";

export const MovieTileDetails = cva({
    base: {
        height: 'fit-content',
        width: '100%',
        backgroundColor: 'tile.0',
        zIndex: 1,
        opacity: 0,
        padding: '10px',
        gap: 0,
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        transition: 'opacity 0.3s ease',
        position: 'absolute',
        left: '0px',
        right: '0px',
        bottom: '0px',
        transform: 'translateY(100%)',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
    },
    variants: {
        visible: {
            true: {
                opacity: 1,
            }
        }
    }
});