import React from "react";
import { PageLayout } from "../Layouts";
import { PageHead } from "../PageHead";
import { Strapline } from "../Typography";

export const Four04 = () => (
    <>
        <PageHead />
        <PageLayout>
            <Strapline>
                <strong>404</strong>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Page
                not found
            </Strapline>
        </PageLayout>
    </>
);
