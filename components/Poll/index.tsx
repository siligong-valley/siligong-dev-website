import React from "react";
import { LandingProps } from "../../types";
import { PollLayout } from "../Layouts/Landing";

export const Poll = ({ techBallotData }: LandingProps) => {
    return <PollLayout>{JSON.stringify(techBallotData)}</PollLayout>;
};
