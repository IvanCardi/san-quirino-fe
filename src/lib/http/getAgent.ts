import { getAccessToken } from "../getAccessToken";
import { Agent } from "../models/agent";

export const getAgent = async (id: string): Promise<Agent> => {
  const token = await getAccessToken();

  const agents = await fetch(`${process.env.BE_BASE_URL}/agents/${id}`, {
    next: { tags: ["agent"] },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await agents.json();
};
