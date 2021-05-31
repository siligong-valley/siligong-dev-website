import { css, keyframes } from "styled-components";

const blinkKeyframes = keyframes`
        0% { opacity:1; }
        40% { opacity:1; }
        41%, 79% { opacity:0; }
        80% { opacity:1; }
        100% { opacity:1; }

`;

export const blinkAnimation = css`
    animation: ${blinkKeyframes} 1.5s linear infinite;
    animation-fill-mode: both;
`;
