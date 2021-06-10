import React from "react";
import { EMAIL_FILEPATH, EMAIL } from "../../constants";
import { contactData } from "../../data/contact";
import { externalLinkProps } from "../../util/externalLinkProps";
import { IconTextLayout } from "../Layouts";
import { ContactLayout } from "../Layouts/Landing";
import { Link, SectionHeading } from "../Typography";
import Image from "next/image";

export const Contact = () => (
    <ContactLayout className="contact">
        <SectionHeading>
            <IconTextLayout>
                <Image
                    alt="email"
                    src={EMAIL_FILEPATH}
                    height="14"
                    width="14"
                />
                <span>Would you like to present or host a meetup?</span>
            </IconTextLayout>
        </SectionHeading>
        <ul>
            {contactData.map(({ display, href }) => (
                <li key={href}>
                    <Link href={href} {...externalLinkProps}>
                        {display}
                    </Link>
                </li>
            ))}
        </ul>
    </ContactLayout>
);
