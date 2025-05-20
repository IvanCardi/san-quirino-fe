import { getAccessToken } from "../getAccessToken";
import { Agent } from "../models/agent";

export const getLeaderboard = async (
  name: string | undefined,
  office: string | undefined,
  year: string | undefined
): Promise<{ score: number; agent: Agent }[]> => {
  const token = await getAccessToken();

  let params = "";

  if (name) {
    params = `?name=${name}`;
  }

  if (office) {
    params = `${params === "" ? "?" : params + "&"}office=${office}`;
  }

  if (year) {
    params = `${params === "" ? "?" : params + "&"}year=${year}`;
  }

  const agents = await fetch(
    `${process.env.BE_BASE_URL}/leaderboard${params}`,
    {
      next: { tags: ["leaderboard"] },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return await agents.json();
};
