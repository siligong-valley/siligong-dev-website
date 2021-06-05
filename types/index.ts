export interface Link {
    name: string;
    icon: string;
    href: string;
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

export interface LandingProps {
    meetupGroupData: MeetupGroupData;
    meetupEventsData: MeetupEventsData;
}
