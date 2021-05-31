import React from "react";
import { Meta } from "@storybook/react";
import styled from "styled-components";
import flatMap from "lodash/flatMap";
import { gridSquares } from "./grid";
import { baseColors } from "./baseColors";

export default {
    title: `Styles`,
} as Meta;

const ColorsList = styled.ul`
    display: flex;

    li {
        width: ${gridSquares(10)};
        height: ${gridSquares(10)};
    }

    color: white;
`;

export const Colors = () => (
    <ColorsList>
        {flatMap(Object.values(baseColors)).map((color) => (
            <li style={{ backgroundColor: color }} key={color} />
        ))}
    </ColorsList>
);
