import { createGlobalStyle } from "styled-components";
import {
    ROBOTO,
    ROBOTO_MONO,
    ROBOTO_MONO_BOLD_FILEPATH,
    ROBOTO_MONO_REGULAR_FILEPATH,
} from "../constants";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: ${ROBOTO};
        src: url(${ROBOTO_MONO_REGULAR_FILEPATH}) format('ttf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: ${ROBOTO_MONO};
        src: url(${ROBOTO_MONO_REGULAR_FILEPATH}) format('ttf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: ${ROBOTO_MONO};
        src: url(${ROBOTO_MONO_BOLD_FILEPATH}) format('ttf');
        font-weight: bold;
        font-style: normal;
    }

    * {
        box-sizing: border-box;

        margin: 0;
        padding: 0;

        color: inherit;
        font-size: inherit;
        font-weight: inherit;
        font-family: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        /* mobile viewport bug fix */
        height: -webkit-fill-available;
     
        display: flex;
    }

    body {
        width: 100%;
        min-height: 100vh;
        /* mobile viewport bug fix */
        min-height: -webkit-fill-available;

        display: flex;

        font-family: ${theme.fontFamily.primary};
        color: ${theme.colors.text.body};
        background: ${theme.colors.background.app};
    }

    #root,
    #___gatsby,
    #___gatsby > * {
        width: 100%;
        flex-grow: 1;
        /* Safari bug fix */
        flex-shrink: 0;

        display: flex;
        flex-direction: column;
    }

    ul {
        list-style: none;
    }

    video,
    iframe {
        /* remove pixels below display: inline */
        display: block;
        /* so imgs will resize based on wrapper constraints */
        width: 100%;
        height: auto;
        /* prevent image from stretching due to 'align-self: default' value is stretch (in flexbox context) */
        align-self: flex-start;
        border: none;
    }

    img {
        /* remove pixels below display: inline */
        display: block;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
    }

    fieldset {
        border: none;

    }
    
    address,
    em {
        font-style: normal;
    }

    [disabled] {
        pointer-events: none;
    }

    :focus {
        outline: 1px solid ${theme.colors.focus};
    }

    /* prevents focus after click, see layouts/index */
    body:not(.user-is-tabbing) a:focus,
    body:not(.user-is-tabbing) button:focus,
    body:not(.user-is-tabbing) input:focus,
    body:not(.user-is-tabbing) select:focus,
    body:not(.user-is-tabbing) textarea:focus {
        outline: none;
    }
`;
