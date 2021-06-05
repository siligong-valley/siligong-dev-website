import { MEETUP_DATA_EVENT_KEYWORD } from "../constants";
import { MeetupEvent, MeetupEventsData, MeetupGroupData } from "../types";

export const getNextEvent = (
    meetupEventsData: MeetupEventsData
): MeetupEvent | null => {
    const events = meetupEventsData || [];
    const nextEvent = events.find(event => event.name.toLocaleLowerCase().includes(MEETUP_DATA_EVENT_KEYWORD));
    return nextEvent || null;
};
