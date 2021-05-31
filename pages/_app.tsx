import React from "react";
import { ThemeProvider } from "styled-components";
import { ScanLines, Vignette } from "../components/Textures";
import { useKeyboardUserHandler } from "../hooks/useKeyboardUserHandler";
import { GlobalStyles } from "../styles/GlobalStyles";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }) {
    useKeyboardUserHandler();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <ScanLines />
            <Vignette />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
