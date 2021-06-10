import styled, { css } from "styled-components";
import { blinkAnimation } from "../../animation";
import {
    robotoFontSizeCss,
    robotoMonoFontSizeCss,
} from "../../styles/fontSize";
import { gridSquares } from "../../styles/grid";

export const SiteHeading = styled.h1`
    ${({ theme }) => css`
        ${robotoMonoFontSizeCss.xl};
        font-family: ${theme.fontFamily.secondary};
        font-weight: ${theme.fontWeight.bold};
        color: ${theme.colors.text.heading};
    `}
`;

export const Strapline = styled.p`
    ${({ theme }) => css`
        ${robotoFontSizeCss.l};

        strong {
            color: ${theme.colors.text.cta};
            font-weight: ${theme.fontWeight.bold};
        }
    `}
`;

export const SectionHeading = styled.h1`
    ${({ theme }) => css`
        ${robotoFontSizeCss.m};
    `}
`;

export const MetaLi = styled.li`
    ${({ theme }) => css`
        ${robotoFontSizeCss.m};

        display: flex;

        span {
            width: ${gridSquares(29)};
        }

        strong {
            color: ${theme.colors.text.cta};
            font-weight: ${theme.fontWeight.bold};
        }

        a {
            color: ${theme.colors.text.cta};
            text-decoration: underline;
            font-weight: ${theme.fontWeight.bold};
        }
    `}
`;

export const Link = styled.a`
    ${({ theme }) => css`
        ${robotoFontSizeCss.m};

        color: ${theme.colors.text.cta};
        text-decoration: underline;
    `}
`;

export const Cursor = styled.span`
    ${({ theme }) => css`
        font-size: 23px;
        ${blinkAnimation}
    `}
`;
