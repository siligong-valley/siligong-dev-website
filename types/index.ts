export interface Link {
    name: string;
    icon: string;
    href: string;
}

export interface Contact {
    display: string;
    href: string;
}

export interface Sponsor {
    href: string;
    icon: string;
    name: string;
}

export interface MeetupEvent {
    name: string;
    time: number;
    utc_offset: number;
    yes_rsvp_count: number;
}

export interface MeetupGroupData {
    members: number;
    next_event?: MeetupEvent;
}

export type MeetupEventsData = Array<MeetupEvent>;

export interface TechBallotEntry {
    name: string;
    votes: number;
}

export type TechBallot = TechBallotEntry[];

export interface LandingProps {
    meetupGroupData: MeetupGroupData;
    meetupEventsData: MeetupEventsData;
    techBallotData: TechBallot;
}
