import { MEETUP_DATA_EVENT_KEYWORD } from "../constants";
import { MeetupData } from "../types";

export const getNextEvent = (
    meetupData: MeetupData
): MeetupData["next_event"] | null => {
    if (!meetupData || !meetupData.next_event) {
        return null;
    }

    const isNextEventSiligongDev = meetupData.next_event.name
        .toLocaleLowerCase()
        .includes(MEETUP_DATA_EVENT_KEYWORD);

    if (!isNextEventSiligongDev) {
        return null;
    }

    return meetupData.next_event;
};
