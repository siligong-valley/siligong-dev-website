import sortBy from "lodash/sortBy";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MIN_MOST_VOTES } from "../../constants";
import { vote } from "../../requests";
import { gridSquares } from "../../styles/grid";
import { LandingProps } from "../../types";
import { PollLayout } from "../Layouts/Landing";
import { ButtonText, SectionHeading } from "../Typography";

export const Button = styled.button`
    ${({ theme }) => css`
        width: calc(100% + ${gridSquares(2)});
        height: ${gridSquares(10)};
        padding-left: ${gridSquares(2)};

        display: flex;
        align-items: center;

        > :not(:first-child) {
            margin-left: ${gridSquares(2)};
        }

        .buttonText {
            width: ${gridSquares(24)};
            text-align: left;
        }

        .vote {
            display: none;
        }

        :hover {
            background: ${theme.colors.hover};

            span {
                color: ${theme.colors.background.app};
            }

            .line {
                display: none;
            }

            .vote {
                display: unset;
            }
        }
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

export const Ballot = ({ techBallotData }: LandingProps) => {
    const [data, setData] = useState(techBallotData);
    const highestVotes = Math.max(
        ...data.map(({ votes }) => votes),
        MIN_MOST_VOTES
    );

    const onClick = async (name: string) => {
        try {
            await vote(name);

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
                                <ButtonText className="buttonText">
                                    {name}
                                </ButtonText>
                                <LineLayout className="line">
                                    <div
                                        style={{
                                            width: `${
                                                (votes / highestVotes) * 100
                                            }%`,
                                        }}
                                    />
                                </LineLayout>
                                <ButtonText className="vote">vote!</ButtonText>
                            </Button>
                        </li>
                    ))}
            </ul>
        </PollLayout>
    );
};
