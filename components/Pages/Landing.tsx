import React from "react";
import { LandingProps } from "../../types";
import { About } from "../About";
import { Contact } from "../Contact";
import { LandingLayout } from "../Layouts/Landing";
import { PageHead } from "../PageHead";
import { Poll } from "../Poll";

export const Landing = (props: LandingProps) => (
    <>
        <PageHead />
        <LandingLayout>
            <Poll {...props} />
            <About {...props} />
            <Contact />
        </LandingLayout>
    </>
);
