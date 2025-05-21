import { getAccessToken } from "../getAccessToken";
import { Agent } from "../models/agent";

export const getMe = async (): Promise<Agent> => {
  const token = await getAccessToken();

  const agents = await fetch(`${process.env.BE_BASE_URL}/agents/me`, {
    next: { tags: ["me"], revalidate: 0 },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await agents.json();
};
