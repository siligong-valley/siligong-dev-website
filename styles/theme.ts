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
            app: baseColors.black[0],
        },
        border: baseColors.green[1],
        focus: baseColors.green[1],
        text: {
            heading: baseColors.green[3],
            cta: baseColors.green[3],
            body: baseColors.green[2],
        },
        shadow: baseColors.green[0],
        theme: baseColors.green[2],
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
    mediaQuery: {
        m: `960px`,
        s: `500px`,
    },
};

export { theme };
