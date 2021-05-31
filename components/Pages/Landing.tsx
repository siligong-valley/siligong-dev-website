import Image from "next/image";
import React from "react";
import {
    EMAIL_FILEPATH,
    EMAIL_HREF,
    SILIGONG_LOGO_FILEPATH,
    SITE_DESCRIPTION,
    SITE_HEADING,
    WOLLONGONG_HREF,
} from "../../constants";
import { links } from "../../data/links";
import { LandingProps } from "../../types";
import { externalLinkProps } from "../../util/externalLinkProps";
import {
    IconTextLayout,
    LinksLayout,
    MetaLayout,
    PageLayout,
} from "../Layouts";
import { Cursor, Link, MetaLi, SiteHeading, Strapline } from "../Typography";

export const Landing = ({ meetupData }: LandingProps) => {
    const memberCount = meetupData?.members;

    return (
        <PageLayout>
            <Image
                alt="A duck"
                src={SILIGONG_LOGO_FILEPATH}
                height="128"
                width="128"
                layout="fixed"
            />
            <SiteHeading>{SITE_HEADING}</SiteHeading>
            <Strapline>
                {SITE_DESCRIPTION}
                <Cursor>&#9646;</Cursor>
            </Strapline>
            <MetaLayout>
                {/* This would be better as a table but time constrained */}
                <MetaLi>
                    <span>Located:</span>{" "}
                    <a href={WOLLONGONG_HREF}>Wollongong, Australia</a>
                </MetaLi>
                {memberCount && (
                    <MetaLi>
                        <span>No. of members:</span>{" "}
                        <strong>{memberCount}</strong>
                    </MetaLi>
                )}
                <MetaLi>
                    <span>Next Meetup:</span> <strong>3rd June 2021</strong>
                </MetaLi>
            </MetaLayout>
            <LinksLayout>
                {links.map(({ href, icon, name }) => (
                    <li key={name}>
                        <a href={href} {...externalLinkProps}>
                            <Image
                                alt={name}
                                src={icon}
                                height="24"
                                width="24"
                                layout="fixed"
                            />
                        </a>
                    </li>
                ))}
            </LinksLayout>
            <Link href={EMAIL_HREF} {...externalLinkProps}>
                <IconTextLayout>
                    <Image
                        alt="email"
                        src={EMAIL_FILEPATH}
                        height="16"
                        width="16"
                    />
                    <span>hello@siligongvalley.com</span>
                </IconTextLayout>
            </Link>
        </PageLayout>
    );
};
