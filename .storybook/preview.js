import { GlobalStyle } from "../styles/GlobalStyle";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "fullscreen",
};

const Layout = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: flex-start;
`;

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <Story />
            </Layout>
        </ThemeProvider>
    ),
];
