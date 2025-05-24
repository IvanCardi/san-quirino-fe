"use server";
import { getAccessToken } from "@/lib/getAccessToken";

export async function subscribeUser(subToken: string) {
  const token = await getAccessToken();
  await fetch(`${process.env.BE_BASE_URL}/subscriptions`, {
    method: "POST",
    body: JSON.stringify({
      subToken,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return { success: true };
}