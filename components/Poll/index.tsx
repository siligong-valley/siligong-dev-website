import React, { useState } from "react";
import styled, { css } from "styled-components";
import { gridSquares } from "../../styles/grid";
import { LandingProps } from "../../types";
import { PollLayout } from "../Layouts/Landing";
import { ButtonText, SectionHeading } from "../Typography";
import sortBy from "lodash/sortBy";
import { MIN_MOST_VOTES, VOTE_API_ENDPOINT } from "../../constants";

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
    const [data, setData] = useState(techBallotData);
    const highestVotes = Math.max(
        ...data.map(({ votes }) => votes),
        MIN_MOST_VOTES
    );

    const onClick = async (name: string) => {
        try {
            await fetch(VOTE_API_ENDPOINT, {
                method: `POST`,
                headers: { "Content-Type": `application/json` },
                body: JSON.stringify({ name }),
            });

            setData((staleData) =>
                staleData.map((entry) =>
                    entry.name === name
                        ? { ...entry, votes: entry.votes + 1 }
                        : entry
                )
            );
        } catch (error) {}
    };

    return (
        <PollLayout className="poll">
            <SectionHeading>
                What tech. are you interested in hearing about?
            </SectionHeading>
            <ul>
                {sortBy(data, ({ votes }) => votes)
                    .reverse()
                    .map(({ name, votes }) => (
                        <li key={name}>
                            <Button onClick={() => onClick(name)}>
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
