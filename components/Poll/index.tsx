import React from "react";
import styled, { css } from "styled-components";
import { gridSquares } from "../../styles/grid";
import { LandingProps } from "../../types";
import { PollLayout } from "../Layouts/Landing";
import { ButtonText, SectionHeading } from "../Typography";
import sortBy from "lodash/sortBy";

export const Button = styled.button`
    ${({ theme }) => css`
        width: ${gridSquares(28)};
        height: ${gridSquares(10)};
        padding: 0 ${gridSquares(2)};

        display: flex;
        align-items: center;
        flex-shrink: 0;
    `}
`;

export const LineLayout = styled.div`
    ${({ theme }) => css`
        width: ${gridSquares(47)};

        > div {
            height: 2px;
            background: ${theme.colors.border};
        }
    `}
`;

export const Poll = ({ techBallotData }: LandingProps) => {
    const highestVotes = Math.max(...techBallotData.map(({ votes }) => votes));

    return (
        <PollLayout className="poll">
            <SectionHeading>
                What tech. are you interested in hearing about?
            </SectionHeading>
            <ul>
                {sortBy(techBallotData, ({ votes }) => votes)
                    .reverse()
                    .map(({ name, votes }) => (
                        <li key={name}>
                            <Button>
                                <ButtonText>{name}</ButtonText>
                            </Button>
                            <LineLayout>
                                <div
                                    style={{
                                        width: `${
                                            (votes / highestVotes) * 100
                                        }%`,
                                    }}
                                />
                            </LineLayout>
                        </li>
                    ))}
            </ul>
        </PollLayout>
    );
};
