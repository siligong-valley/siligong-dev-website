export interface Link {
    name: string;
    icon: string;
    href: string;
}

export interface MeetupData {
    members: number;
    next_event?: {
        name: string;
        time: number;
        utc_offset: number;
        yes_rsvp_count: number;
    };
}

export interface LandingProps {
    meetupData: MeetupData;
}
