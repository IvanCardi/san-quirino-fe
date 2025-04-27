import { getAccessToken } from "../getAccessToken";

export const getIsSubscribed = async (): Promise<boolean> => {
  const token = await getAccessToken();

  const result = await fetch(`${process.env.BE_BASE_URL}/isSubscribed`, {
    next: { tags: ["leaderboard"] },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (await result.json()).isSubscribed;
};
