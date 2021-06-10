import Image from "next/image";
import React from "react";
import { FOUR04_FILEPATH } from "../../constants";
import { PageLayout } from "../Layouts";
import { PageHead } from "../PageHead";
import { Strapline } from "../Typography";

export const Four04 = () => (
    <>
        <PageHead />
        <PageLayout>
            <Image
                alt="A duck"
                src={FOUR04_FILEPATH}
                height="128"
                width="128"
                layout="fixed"
            />
            <Strapline>
                <strong>404</strong>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Page
                not found
            </Strapline>
        </PageLayout>
    </>
);
