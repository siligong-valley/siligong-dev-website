import { format } from "date-fns";

export const timestampToDisplay = (timestamp: number) =>
    format(timestamp, `E, do MMM, Kaaa`);
