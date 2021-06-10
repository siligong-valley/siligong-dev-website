import React from "react";
import { EMAIL_FILEPATH, EMAIL } from "../../constants";
import { contactData } from "../../data/contact";
import { externalLinkProps } from "../../util/externalLinkProps";
import { IconTextLayout } from "../Layouts";
import { SponsorsLayout } from "../Layouts/Landing";
import { Link, SectionHeading } from "../Typography";
import Image from "next/image";
import { sponsorsData } from "../../data/sponsors";

export const Sponsors = () => {
    return (
        <SponsorsLayout>
            <SectionHeading>Sponsored by:</SectionHeading>
            <ul>
                {sponsorsData.map(({ name, href, icon }) => (
                    <li key={href}>
                        <a href={href} {...externalLinkProps}>
                            <Image
                                alt={name}
                                src={icon}
                                height="25"
                                width="100"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </SponsorsLayout>
    );
};
