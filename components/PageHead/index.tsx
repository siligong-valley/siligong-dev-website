import NextHead from "next/head";
import { useRouter } from "next/router";
import React from "react";
import {
    AUTHOR,
    SITE_DESCRIPTION,
    SITE_HEADING,
    SITE_URL,
    TWITTER_CREATOR,
} from "../../constants";
import { theme } from "../../styles/theme";

// Testing
// https://manifest-validator.appspot.com/
// https://developers.facebook.com/tools/debug/
// https://cards-dev.twitter.com/validator
// https://www.linkedin.com/post-inspector/inspect/

interface PropsType {
    author?: string;
    canonicalUrl?: string;
    description?: string;
    title?: string;
    twitterCreator?: string;
}

export const PageHead = ({
    author = AUTHOR,
    canonicalUrl,
    description = SITE_DESCRIPTION,
    title = SITE_HEADING,
    twitterCreator = TWITTER_CREATOR,
}: PropsType) => {
    const { pathname } = useRouter();
    const pageUrl = `${SITE_URL}${pathname}`;
    const ogImageUrl = `${SITE_URL}/ogImage.png`;
    const themeColor = theme.colors.theme;

    return (
        <NextHead>
            {/* https://neilpatel.com/blog/open-graph-meta-tags/ */}
            <meta charSet="utf-8" />
            <link rel="canonical" href={canonicalUrl || pageUrl} />

            {/* favicon */}
            {/* https://realfavicongenerator.net/ */}
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color={themeColor}
            />
            <meta name="msapplication-TileColor" content={themeColor} />
            <meta name="theme-color" content={themeColor} />
            {/* ------------------------------------------------------ */}

            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content={author} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImageUrl} />
            <meta property="og:image:height" content="640" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={pageUrl} />

            {/* Twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:creator" content={twitterCreator} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={ogImageUrl} />
            <meta name="twitter:url" content={pageUrl} />
        </NextHead>
    );
};
