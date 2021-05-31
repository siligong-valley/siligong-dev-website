import React from "react";
import { Landing } from "../components/Pages/Landing";
import { MEETUP_API_ENDPOINT } from "../constants";
import { LandingProps, MeetupData } from "../types";

export default function LandingPage(props) {
    return <Landing {...props} />;
}

export async function getServerSideProps() {
    let data: MeetupData | null = null;

    try {
        const repsonse = await fetch(MEETUP_API_ENDPOINT);
        data = await repsonse.json();
    } catch {}

    const props: LandingProps = {
        meetupData: data,
    };

    return {
        props,
    };
}
