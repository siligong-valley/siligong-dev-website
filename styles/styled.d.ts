import "styled-components";
import { ThemeFontSizeType } from "../types";

declare module "styled-components" {
    export interface DefaultTheme {
        borderRadius: {
            pageBorder: string;
        };
        colors: {
            background: {
                app: string;
            };
            text: {
                heading: string;
                body: string;
                cta: string;
            };
            border: string;
            focus: string;
            hover: string;
            text: string;
            shadow: string;
            theme: string;
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
        mediaQuery: {
            m: string;
            s: string;
        };
    }
}
