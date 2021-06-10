import React from "react";
import { LandingProps } from "../../types";
import { About } from "../About";
import { Contact } from "../Contact";
import { LandingLayout } from "../Layouts/Landing";
import { PageHead } from "../PageHead";
import { Ballot } from "../Ballot";
import { Social } from "../Social";
import { Sponsors } from "../Sponsors";

export const Landing = (props: LandingProps) => (
    <>
        <PageHead />
        <LandingLayout>
            <About {...props} />
            <Ballot {...props} />
            <Contact />
            <Sponsors />
            <Social />
        </LandingLayout>
    </>
);
