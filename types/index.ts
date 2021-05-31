export interface Link {
    name: string;
    icon: string;
    href: string;
}

export interface MeetupData {
    members: number;
}

export interface LandingProps {
    meetupData: MeetupData;
}
