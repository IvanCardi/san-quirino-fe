import { getAccessToken } from "../getAccessToken";
import { Agent } from "../models/agent";

export const getLeaderboard = async (): Promise<
  { score: number; agent: Agent }[]
> => {
  const token = await getAccessToken();

  const agents = await fetch(`${process.env.BE_BASE_URL}/leaderboard`, {
    next: { tags: ["leaderboard"] },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await agents.json();
};
