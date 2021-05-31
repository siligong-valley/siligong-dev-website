import styled from "styled-components";
import { scanLines, vignette } from "../../textures";

export const ScanLines = styled.div`
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    pointer-events: none;
    ${scanLines}
`;

export const Vignette = styled.div`
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    pointer-events: none;
    ${vignette}
`;
