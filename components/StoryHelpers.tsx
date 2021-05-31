import styled from "styled-components";
import { gridSquares } from "../styles/grid";

export const mockFunction = () => {
    console.log(`click`);
};

export const ColumnLayout = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > :not(:first-child) {
        margin-top: ${gridSquares(4)};
    }
`;
