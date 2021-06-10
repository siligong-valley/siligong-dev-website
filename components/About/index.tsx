import Image from "next/image";
import React from "react";
import {
    MEETUP_HREF,
    SILIGONG_LOGO_FILEPATH,
    SITE_DESCRIPTION,
    SITE_HEADING,
    WOLLONGONG_HREF,
} from "../../constants";
import { timestampToDisplay } from "../../dateFunctions";
import { LandingProps } from "../../types";
import { externalLinkProps } from "../../util/externalLinkProps";
import { getNextEvent } from "../../util/getNextEvent";
import { MetaLayout } from "../Layouts";
import { AboutLayout } from "../Layouts/Landing";
import { Cursor, MetaLi, SiteHeading, Strapline } from "../Typography";

export const About = ({ meetupGroupData, meetupEventsData }: LandingProps) => {
    const memberCount = meetupGroupData?.members;
    const nextEvent = getNextEvent(meetupEventsData);

    return (
        <AboutLayout className="about">
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
                    <a href={WOLLONGONG_HREF} {...externalLinkProps}>
                        Wollongong, Australia
                    </a>
                </MetaLi>
                {memberCount && (
                    <MetaLi>
                        <span>No. of members:</span>{" "}
                        <strong>{memberCount}</strong>
                    </MetaLi>
                )}
                <MetaLi>
                    <span>Next Meetup:</span>
                    <a href={MEETUP_HREF} {...externalLinkProps}>
                        {nextEvent ? (
                            <>
                                <strong>
                                    {timestampToDisplay(nextEvent.time)}
                                </strong>
                            </>
                        ) : (
                            <strong>to be determined</strong>
                        )}
                    </a>
                    {nextEvent && (
                        <span>
                            &nbsp; [ {nextEvent.yes_rsvp_count} attending ]
                        </span>
                    )}
                </MetaLi>
            </MetaLayout>
        </AboutLayout>
    );
};
