import React from "react";
import { PageLayout } from "../Layouts";
import { PageHead } from "../PageHead";
import { Strapline } from "../Typography";
import Image from "next/image";
import { SILIGONG_LOGO_FILEPATH } from "../../constants";
import styled, { css } from "styled-components";

export const Rotate = styled.div`
    ${({ theme }) => css`
        display: flex;
        transform: rotate(180deg);
    `}
`;

export const Four04 = () => (
    <>
        <PageHead />
        <PageLayout>
            <Rotate>
                <Image
                    alt="A duck"
                    src={SILIGONG_LOGO_FILEPATH}
                    height="128"
                    width="128"
                    layout="fixed"
                />
            </Rotate>
            <Strapline>
                <strong>404</strong>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Page
                not found
            </Strapline>
        </PageLayout>
    </>
);
