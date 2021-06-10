import { VOTE_API_ENDPOINT } from "../constants";

export const vote = (name: string) =>
    fetch(VOTE_API_ENDPOINT, {
        body: JSON.stringify({ name }),
        headers: { "Content-Type": `application/json` },
        method: `POST`,
    });
