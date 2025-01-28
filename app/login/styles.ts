import { css } from "@/styled-system/css";

export const loginPageContainer = css({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    gap: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
});

export const loginFormContainer = css({
    width: '500px',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'tile.0',
    // border: '1px solid',
    padding: '30px',
    // borderColor: 'border',
    borderRadius: '10px',
    alignItems: 'center',
    flexDirection: 'column',
    // border: '1px solid',
    // borderColor: 'border',
    gap: '15px'
});

export const blurDiv = css({
    position: 'absolute',
    zIndex: 0,
    color: 'transparent',
    background: 'linear-gradient(5deg, rgb(162, 99, 240) 0%, rgb(85, 14, 143) 100%)',
    top: '20%',
    bottom: '20%',
    left: '20%',
    right: '20%',
    borderRadius: '50px',
    filter: 'blur(300px) opacity(0.4)',
})