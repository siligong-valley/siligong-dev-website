import {
    EMAIL_FILEPATH,
    EMAIL_HREF,
    FACEBOOK_FILEPATH,
    FACEBOOK_HREF,
    MEETUP_FILEPATH,
    MEETUP_HREF,
    SLACK_FILEPATH,
    SLACK_HREF,
    TWITTER_FILEPATH,
    TWITTER_HREF,
} from "../constants";
import { Link } from "../types";

export const links: Link[] = [
    {
        name: `Slack`,
        icon: SLACK_FILEPATH,
        href: SLACK_HREF,
    },
    {
        name: `Meetup`,
        icon: MEETUP_FILEPATH,
        href: MEETUP_HREF,
    },
    {
        name: `Twitter`,
        icon: TWITTER_FILEPATH,
        href: TWITTER_HREF,
    },
    {
        name: `Facebook`,
        icon: FACEBOOK_FILEPATH,
        href: FACEBOOK_HREF,
    },
];
