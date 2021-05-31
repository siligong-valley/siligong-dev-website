import { CapsizeStyles } from "capsize";
import { css } from "styled-components";

export const capSizeStylesToCss = (style: CapsizeStyles) => css`
    font-size: ${style.fontSize};
    line-height: ${style.lineHeight};

    ::after {
        content: "";
        display: ${style[`::after`].display};
        margin-top: ${style[`::after`].marginTop};
    }

    ::before {
        content: "";
        display: ${style[`::before`].display};
        margin-top: ${style[`::before`].marginBottom};
    }
`;
