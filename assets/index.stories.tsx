import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { gridSquares } from "../styles/grid";

export default {
    title: `Assets`,
} as Meta;

const ImagesLayout = styled.ul`
    width: 100%;
    display: grid;
    grid-auto-columns: auto;
    grid-template-columns: repeat(auto-fit, ${gridSquares(40)});

    li {
        display: flex;
    }
`;

const images = [`siteLogo`];

export const Images = () => (
    <ImagesLayout>
        {images.map((image) => (
            <li key={image}>
                <img alt={image} src={`/images/${image}.svg`} />
            </li>
        ))}
    </ImagesLayout>
);

export const ogImage = () => <img alt="" src="/ogImage.png" />;

export const favicon = () => <img alt="" src="/favicon-32x32.png" />;
