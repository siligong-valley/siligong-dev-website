import { DefaultTheme } from "styled-components";
import { ROBOTO_MONO, ROBOTO } from "../constants";
import { baseColors } from "./baseColors";
import { gridSquares, GRID_SQUARE } from "./grid";

const theme: DefaultTheme = {
    borderRadius: {
        pageBorder: gridSquares(4),
    },
    colors: {
        background: {
            active: baseColors.green[1],
            app: baseColors.black[0],
            cta: baseColors.green[3],
            menu: baseColors.green[3],
            subMenu: baseColors.green[2],
            progress: baseColors.green[1],
            hover: baseColors.green[2],
        },
        border: baseColors.green[1],
        focus: baseColors.green[1],
        text: {
            alt: baseColors.black[0],
            heading: baseColors.green[3],
            cta: baseColors.green[3],
            body: baseColors.green[2],
            meta: baseColors.green[1],
        },
        shadow: baseColors.green[0],
        theme: baseColors.green[2],
    },
    duration: {
        loader: `3s`,
    },
    fontFamily: {
        primary: `${ROBOTO}, sans-serif`,
        secondary: `${ROBOTO_MONO}, monospace`,
    },
    // https://type-scale.com/ - Major Second
    fontSize: {
        xl: { capHeight: 18.25, lineGap: 8 },
        l: { capHeight: 11.4, lineGap: 12 },
        m: { capHeight: 10.15, lineGap: 8 },
        s: { capHeight: 9.05, lineGap: 4 },
    },
    fontWeight: {
        bold: `bold`,
        normal: `normal`,
    },
    grid: {
        square: GRID_SQUARE,
    },
    maxWidth: {
        paragraph: gridSquares(160),
    },
    mediaQuery: {
        s: `500px`,
    },
    outlineOffset: {
        l: `8px`,
        s: `4px`,
    },
    padding: {
        innerPageLayout: gridSquares(6),
    },
    transition: (property) => `${property} 0.15s linear`,
};

export { theme };
