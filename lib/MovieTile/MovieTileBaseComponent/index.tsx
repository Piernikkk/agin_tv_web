import { css } from "@/styled-system/css";
import { TMovieTile } from "..";
import { movieTileBaseContainer, movieTileImage } from "./styles";

export interface MovieTileBaseComponentProps extends React.HTMLAttributes<HTMLDivElement>, TMovieTile {
    hovered?: boolean;
    bigger?: boolean;
    ref?: React.Ref<HTMLDivElement>;
}

export default function MovieTileBaseComponent({ background_url, name, position, duration, hovered, bigger, ref, ...props }: MovieTileBaseComponentProps) {
    return (
        <div onClick={() => window.open('https://niggafart.com')} {...props} ref={ref} className={movieTileBaseContainer({ hovered, bigger })}>
            <div className={movieTileImage({ hovered })}>
                <img src={background_url} alt={name} className={css({ aspectRatio: 16 / 9, height: '100%' })} />
                {(position && duration) && <div style={{
                    position: 'absolute',
                    top: 171,
                    left: 0,
                    right: 0,
                    height: '29px',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(73, 71, 71, 0) 100%)',
                    zIndex: 0,
                }}>
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        backgroundColor: '#FFFFFF',
                        height: '7px',
                        width: `${(position / duration) * 100 <= 100 ? (position / duration) * 100 : 100}%`,
                        transition: 'width 0.5s ease',
                    }} />
                </div>}
            </div>
            {props.children}
        </div>
    )
}