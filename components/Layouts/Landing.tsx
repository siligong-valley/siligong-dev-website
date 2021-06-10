import styled, { css } from "styled-components";
import { gridSquares } from "../../styles/grid";

export const LandingLayout = styled.section`
    ${({ theme }) => css`
        width: 100%;
        flex-grow: 1;

        position: relative;

        display: grid;
        grid:
            "poll contact" 1fr
            "sponsors social" 1fr
            / 1fr 1fr;

        .poll {
            grid-area: poll;
        }

        .contact {
            grid-area: contact;
            justify-self: end;
        }

        .sponsors {
            grid-area: sponsors;
            align-self: end;
        }

        .social {
            grid-area: social;
            justify-self: end;
            align-self: end;
        }

        .about {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    `}
`;

export const AboutLayout = styled.section`
    ${({ theme }) => css`
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        > :not(:first-child) {
            margin-top: ${gridSquares(10)};
        }
    `}
`;

export const PollLayout = styled.section`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        > :not(:first-child) {
            margin-top: ${gridSquares(4)};
        }

        ul {
            display: flex;
            flex-direction: column;

            /* for alignment */
            transform: translateX(-${gridSquares(2)});

            li {
                display: flex;
                align-items: center;
            }
        }
    `}
`;

export const ContactLayout = styled.section`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;

        > :not(:first-child) {
            margin-top: ${gridSquares(6)};
        }

        ul {
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            > :not(:first-child) {
                margin-top: ${gridSquares(6)};
            }

            li {
                display: flex;
            }
        }
    `}
`;

export const SponsorsLayout = styled.section`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        /* for alignment */
        transform: translateY(${gridSquares(2)});

        > :not(:first-child) {
            margin-top: ${gridSquares(6)};
        }

        ul {
            display: flex;

            > :not(:first-child) {
                margin-left: ${gridSquares(6)};
            }

            li {
                display: flex;
            }
        }
    `}
`;

export const SocialLayout = styled.ul`
    ${({ theme }) => css`
        display: flex;

        /* for alignment */
        transform: translate(${gridSquares(2)}, ${gridSquares(3)});

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