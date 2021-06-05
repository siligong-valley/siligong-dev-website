import React from "react";
import { Landing } from "../components/Pages/Landing";
import {
    MEETUP_API_EVENTS_ENDPOINT,
    MEETUP_API_GROUP_ENDPOINT,
} from "../constants";
import { LandingProps, MeetupEventsData, MeetupGroupData } from "../types";

// this codebase doesn't use export default however it is a requirement of next.js for pages
export default function LandingPage(props) {
    return <Landing {...props} />;
}

export async function getServerSideProps() {
    let groupData: MeetupGroupData | null = null;
    let eventsData: MeetupEventsData | null = null;

    try {
        const groupsResponse = await fetch(MEETUP_API_GROUP_ENDPOINT);
        groupData = await groupsResponse.json();

        const eventsResponse = await fetch(MEETUP_API_EVENTS_ENDPOINT);
        eventsData = await eventsResponse.json();
    } catch {}

    const props: LandingProps = {
        meetupGroupData: groupData,
        meetupEventsData: eventsData,
    };

    return {
        props,
    };
}
