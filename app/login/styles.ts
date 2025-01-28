import { css } from "@/styled-system/css";

export const loginPageContainer = css({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
});

export const loginFormContainer = css({
    width: '300px',
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid',
    padding: '30px',
    borderColor: 'border',
    alignItems: 'center',
    flexDirection: 'column',
    // border: '1px solid',
    // borderColor: 'border',
    gap: '10px'
});