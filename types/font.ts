import { FlattenSimpleInterpolation } from "styled-components";

export type FontSizeType = `s` | `m` | `l` | `xl`;

export interface FontSizeSettingsType {
    capHeight: number;
    lineGap: number;
}

export type FontSizeCssType = Record<FontSizeType, FlattenSimpleInterpolation>;

export type ThemeFontSizeType = Record<FontSizeType, FontSizeSettingsType>;
