import Image from "next/image";
import React from "react";
import { links } from "../../data/links";
import { externalLinkProps } from "../../util/externalLinkProps";
import { SocialLayout } from "../Layouts/Landing";

export const Social = () => (
    <SocialLayout className="social">
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
    </SocialLayout>
);
