import Image from "next/image";
import React from "react";
import { sponsorsData } from "../../data/sponsors";
import { externalLinkProps } from "../../util/externalLinkProps";
import { SponsorsLayout } from "../Layouts/Landing";
import { SectionHeading } from "../Typography";

export const Sponsors = () => (
    <SponsorsLayout className="sponsors">
        <SectionHeading>Sponsored by:</SectionHeading>
        <ul>
            {sponsorsData.map(({ name, href, icon }) => (
                <li key={href}>
                    <a href={href} {...externalLinkProps}>
                        <Image alt={name} src={icon} height="25" width="100" />
                    </a>
                </li>
            ))}
        </ul>
    </SponsorsLayout>
);
