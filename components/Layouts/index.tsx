import styled, { css } from "styled-components";
import { gridSquares } from "../../styles/grid";

export const AppLayout = styled.div`
    ${({ theme }) => css`
        width: 100%;
        flex-grow: 1;
        padding: ${gridSquares(6)};

        display: flex;

        border: 1px solid ${theme.colors.border};
        border-radius: ${theme.borderRadius.pageBorder};
        box-shadow: inset 0px 0px 0px 2px ${theme.colors.shadow};

        @media (max-width: ${theme.mediaQuery.s}) {
            padding: ${gridSquares(4)};
        }
    `}
`;

export const PageLayout = styled.section`
    ${({ theme }) => css`
        width: 100%;
        flex-grow: 1;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > :not(:first-child) {
            margin-top: ${gridSquares(10)};
        }

        @media (max-width: ${theme.mediaQuery.s}) {
            padding: ${gridSquares(4)};
        }
    `}
`;

export const MetaLayout = styled.ul`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;

        > :not(:first-child) {
            margin-top: ${gridSquares(2)};
        }
    `}
`;

export const LinksLayout = styled.ul`
    ${({ theme }) => css`
        display: flex;

        > :not(:first-child) {
            margin-left: ${gridSquares(4)};
        }

        li {
            display: flex;

            a {
                padding: ${gridSquares(1.75)};
            }
        }
    `}
`;

export const IconTextLayout = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;

        > :not(:first-child) {
            margin-left: ${gridSquares(2)};
        }
    `}
`;
