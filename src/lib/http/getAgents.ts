import { getAccessToken } from "../getAccessToken";
import { Agent } from "../models/agent";

export const getAgents = async (officeId?: string): Promise<Agent[]> => {
  const token = await getAccessToken();

  const agents = await fetch(
    `${process.env.BE_BASE_URL}/agents?officeId=${officeId}`,
    {
      next: { tags: ["agents"], revalidate: 0 },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return await agents.json();
};
