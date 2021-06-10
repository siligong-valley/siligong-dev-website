import { EMAIL } from "../constants";
import { Contact } from "../types";

export const contactData: Contact[] = [
    {
        display: `I would like to present`,
        href: `mailto:${EMAIL}?Subject=Presentation proposal from siligong.dev website`,
    },
    {
        display: `I would like to host a meetup`,
        href: `mailto:${EMAIL}?Subject=Hosting proposal from siligong.dev website`,
    },
    {
        display: `General enquiry`,
        href: `mailto:${EMAIL}?Subject=General enquiry from siligong.dev website`,
    },
];
