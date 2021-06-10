import React from "react";
import { Landing } from "../components/Pages/Landing";
import {
    MEETUP_API_EVENTS_ENDPOINT,
    MEETUP_API_GROUP_ENDPOINT,
} from "../constants";
import {
    LandingProps,
    MeetupEventsData,
    MeetupGroupData,
    TechBallot,
} from "../types";
var Airtable = require("airtable");

// this codebase doesn't use export default however it is a requirement of next.js for pages
export default function LandingPage(props: LandingProps) {
    return <Landing {...props} />;
}

export const getServerSideProps = async () => {
    var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
        process.env.AIRTABLE_BASE_ID
    );

    let groupData: MeetupGroupData | null = null;
    let eventsData: MeetupEventsData | null = null;
    let techBallot: TechBallot | null = null;

    try {
        const responses = await Promise.allSettled([
            fetch(MEETUP_API_GROUP_ENDPOINT),
            fetch(MEETUP_API_EVENTS_ENDPOINT),
            base("techVotes").select({}).firstPage(),
        ]);

        if (responses[0].status === `fulfilled`) {
            groupData = await responses[0].value.json();
        }

        if (responses[1].status === `fulfilled`) {
            eventsData = await responses[1].value.json();
        }

        if (responses[2].status === `fulfilled`) {
            techBallot = responses[2].value.map((record) => ({
                name: record.get(`name`),
                votes: record.get(`votes`),
            }));
        }
    } catch {}

    const props: LandingProps = {
        meetupGroupData: groupData,
        meetupEventsData: eventsData,
        techBallotData: techBallot,
    };

    return {
        props,
    };
};
