import { css } from "styled-components";
import { gridSquares } from "../styles/grid";

const HEIGHT = 4;

export const scanLines = css`
    background: repeating-linear-gradient(
        0deg,
        hsla(0, 100%, 100%, 0.05),
        hsla(0, 100%, 100%, 0.05) ${HEIGHT / 2}px,
        transparent ${HEIGHT / 2}px,
        transparent ${HEIGHT}px
    );
`;

// https://una.im/vignettes/
export const vignette = css`
    box-shadow: inset 0 0 ${gridSquares(4)} black;
`;
