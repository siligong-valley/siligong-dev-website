import { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";
import { TECH_BALLOT_TABLE } from "../../constants";

const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { name } = req.body;

        if (name) {
            try {
                const databaseResponse = await base(TECH_BALLOT_TABLE)
                    .select({})
                    .firstPage();

                const ballot = databaseResponse.map((record) => ({
                    name: record.get(`name`) as string,
                    votes: record.get(`votes`) as number,
                }));

                const names = ballot.map(({ name }) => name);

                if (!names.includes(name)) {
                    throw Error();
                }

                const updatedBallot = databaseResponse.map((entry) => ({
                    id: entry.id,
                    fields: {
                        name: entry.fields.name,
                        votes:
                            entry.fields.name === name
                                ? (entry.fields.votes as number) + 1
                                : entry.fields.votes,
                    },
                }));

                await base(TECH_BALLOT_TABLE).update(updatedBallot);

                return res.status(200).json({ name });
            } catch (error) {
                return res.status(500).json(error);
            }
        }
    }

    return res.status(400);
}
