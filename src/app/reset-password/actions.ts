"use server";
import { getAccessToken } from "@/lib/getAccessToken";
import { ServerActionResponse } from "@/lib/serverActionResponse";

export async function resetPassword(data: {
  oldPassword: string;
  newPassword: string;
}): Promise<ServerActionResponse> {
  try {
    const token = await getAccessToken();

    const result = await fetch(`${process.env.BE_BASE_URL}/reset`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...data,
      }),
      credentials: "include",
    });

    if (result.status !== 200) {
      return {
        status: "error",
        message: (await result.json()).message,
      };
    }

    return { status: "ok" };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    return { status: "error", message: "Si è verificato un errore" };
  }
}
