import "styled-components";
import { ThemeFontSizeType } from "../types";

declare module "styled-components" {
    export interface DefaultTheme {
        borderRadius: {
            pageBorder: string;
        };
        colors: {
            background: {
                active: string;
                app: string;
                cta: string;
                menu: string;
                subMenu: string;
                progress: string;
                hover: string;
            };
            text: {
                heading: string;
                body: string;
                meta: string;
                alt: string;
                navLink: string;
            };
            border: string;
            focus: string;
            text: string;
            shadow: string;
        };
        duration: {
            loader: string;
        };
        fontFamily: {
            primary: string;
            secondary: string;
        };
        fontSize: ThemeFontSizeType;
        fontWeight: {
            bold: string;
            normal: string;
        };
        grid: {
            square: number;
        };
        maxWidth: {
            paragraph: string;
        };
        mediaQuery: {
            l: string;
            m: string;
            s: string;
        };
        outlineOffset: {
            l: string;
            s: string;
        };
        padding: {
            innerPageLayout: string;
        };
        transition: (property: string) => string;
    }
}
