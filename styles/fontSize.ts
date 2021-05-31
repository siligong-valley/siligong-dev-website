import capsize from "capsize";
import { mapValues } from "lodash";
import { FontSizeCssType, FontSizeSettingsType } from "../types/font";
import { capSizeStylesToCss } from "../util/capSizeStylesToCss";
import { theme } from "./theme";

// https://seek-oss.github.io/capsize/

const robotoFontMetrics = {
    capHeight: 1456,
    ascent: 1900,
    descent: -500,
    lineGap: 0,
    unitsPerEm: 2048,
};

const robotoMonoFontMetrics = {
    capHeight: 1456,
    ascent: 2146,
    descent: -555,
    lineGap: 0,
    unitsPerEm: 2048,
};

export const robotoCapsizeStyles = ({
    capHeight,
    lineGap,
}: FontSizeSettingsType) =>
    capsize({
        fontMetrics: robotoFontMetrics,
        capHeight,
        lineGap,
    });

export const robotoMonoCapsizeStyles = ({
    capHeight,
    lineGap,
}: FontSizeSettingsType) =>
    capsize({
        fontMetrics: robotoMonoFontMetrics,
        capHeight,
        lineGap,
    });

export const robotoFontSizeCss: FontSizeCssType = mapValues(
    theme.fontSize,
    (size) => capSizeStylesToCss(robotoCapsizeStyles(size))
);

export const robotoMonoFontSizeCss: FontSizeCssType = mapValues(
    theme.fontSize,
    (size) => capSizeStylesToCss(robotoMonoCapsizeStyles(size))
);
