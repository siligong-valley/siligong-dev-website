import { Meta } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { ColumnLayout } from "../components/StoryHelpers";
import { FontSizeType } from "../types/font";
import { robotoFontSizeCss, robotoMonoFontSizeCss } from "./fontSize";
import { theme } from "./theme";

export default {
    title: `Styles/Font`,
} as Meta;

const fontSizes = Object.keys(theme.fontSize) as FontSizeType[];

export const PrimarySize = () => (
    <ColumnLayout>
        {fontSizes.map((fontSize) => {
            const Li = styled.li`
                font-family: ${theme.fontFamily.primary};
                ${robotoFontSizeCss[fontSize]}
            `;

            return <Li key={fontSize}>fontSize: {fontSize}</Li>;
        })}
    </ColumnLayout>
);

export const SecondarySize = () => (
    <ColumnLayout>
        {fontSizes.map((fontSize) => {
            const Li = styled.li`
                font-family: ${theme.fontFamily.secondary};
                ${robotoMonoFontSizeCss[fontSize]}
            `;

            return <Li key={fontSize}>fontSize: {fontSize}</Li>;
        })}
    </ColumnLayout>
);

export const Weight = () => (
    <ColumnLayout>
        {Object.keys(theme.fontWeight).map((weight) => {
            const Li = styled.li`
                font-family: ${theme.fontFamily.secondary};
                ${robotoMonoFontSizeCss.m};
                /* @ts-ignore */
                font-weight: ${theme.fontWeight[weight]};
            `;

            return <Li key={weight}>weight: {weight}</Li>;
        })}
    </ColumnLayout>
);
