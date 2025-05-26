"use server";
import { getAccessToken } from "@/lib/getAccessToken";
import { ServerActionResponse } from "@/lib/serverActionResponse";
import { revalidateTag } from "next/cache";

export async function changeAvatar(
  avatar: string
): Promise<ServerActionResponse> {
  try {
    const token = await getAccessToken();

    const result = await fetch(`${process.env.BE_BASE_URL}/agents/me/avatar`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        avatar,
      }),
      credentials: "include",
    });

    if (result.status !== 200) {
      return {
        status: "error",
        message: (await result.json()).message,
      };
    }

    revalidateTag("me");

    return { status: "ok" };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    return { status: "error", message: "" };
  }
}

export async function changeNickname(
  nickname: string
): Promise<ServerActionResponse> {
  try {
    const token = await getAccessToken();

    const result = await fetch(`${process.env.BE_BASE_URL}/agents/me/nickname`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        nickname,
      }),
      credentials: "include",
    });

    if (result.status !== 200) {
      return {
        status: "error",
        message: (await result.json()).message,
      };
    }

    revalidateTag("me");

    return { status: "ok" };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    return { status: "error", message: "" };
  }
}
