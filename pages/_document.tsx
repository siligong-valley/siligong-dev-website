import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import {
    ROBOTO_REGULAR_FILEPATH,
    ROBOTO_MONO_REGULAR_FILEPATH,
    ROBOTO_MONO_BOLD_FILEPATH,
    ROBOTO_BOLD_FILEPATH,
} from "../constants";

// https://styled-components.com/docs/advanced#server-side-rendering

// this codebase doesn't use export default however it is a requirement of next.js for this component
export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* https://web.dev/preload-optional-fonts/?utm_source=lighthouse&utm_medium=devtools */}
                    {[
                        ROBOTO_REGULAR_FILEPATH,
                        ROBOTO_BOLD_FILEPATH,
                        ROBOTO_MONO_REGULAR_FILEPATH,
                        ROBOTO_MONO_BOLD_FILEPATH,
                    ].map((filepath) => (
                        <link
                            key={filepath}
                            rel="preload"
                            as="font"
                            href={filepath}
                            type="font/ttf"
                            crossOrigin="anonymous"
                        />
                    ))}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
