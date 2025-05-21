import { getAccessToken } from "../getAccessToken";

export const getOfficeLeaderboard = async (): Promise<
  { score: number; office: { id: string; name: string } }[]
> => {
  const token = await getAccessToken();

  const agents = await fetch(`${process.env.BE_BASE_URL}/officeleaderboard`, {
    next: { tags: ["office-leaderboard"], revalidate: 0 },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await agents.json();
};
