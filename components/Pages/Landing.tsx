import React from "react";
import { LandingProps } from "../../types";
import { About } from "../About";
import { Contact } from "../Contact";
import { LandingLayout } from "../Layouts/Landing";
import { PageHead } from "../PageHead";
import { Poll } from "../Poll";
import { Sponsors } from "../Sponsors";

export const Landing = (props: LandingProps) => (
    <>
        <PageHead />
        <LandingLayout>
            <Poll {...props} />
            <About {...props} />
            <Contact />
            <Sponsors />
        </LandingLayout>
    </>
);
