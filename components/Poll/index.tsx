import React from "react";
import { LandingProps } from "../../types";
import { PollLayout } from "../Layouts/Landing";

export const Poll = ({ techBallotData }: LandingProps) => {
    return (
        <PollLayout className="poll">
            {JSON.stringify(techBallotData)}
        </PollLayout>
    );
};
