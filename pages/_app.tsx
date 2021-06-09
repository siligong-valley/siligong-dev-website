import React from "react";
import { ThemeProvider } from "styled-components";
import { ScanLines, Vignette } from "../components/Textures";
import { consoleMessage } from "../consoleMessage";
import { useKeyboardUserHandler } from "../hooks/useKeyboardUserHandler";
import { GlobalStyles } from "../styles/GlobalStyles";
import { theme } from "../styles/theme";

// this codebase doesn't use export default however it is a requirement of next.js for this component
export default function App({ Component, pageProps }) {
    useKeyboardUserHandler();
    console.log(consoleMessage);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <ScanLines />
            <Vignette />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
