"use server";
import { getAccessToken } from "@/lib/getAccessToken";
import { ServerActionResponse } from "@/lib/serverActionResponse";
import { revalidateTag } from "next/cache";

export async function makeCdv(data: {
  appointmentDate: string;
  actionId: string;
}): Promise<ServerActionResponse> {
  try {
    const token = await getAccessToken();

    const result = await fetch(
      `${process.env.BE_BASE_URL}/actions/${data.actionId}/cdv`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          appointmentDate: data.appointmentDate,
        }),
        credentials: "include",
      }
    );

    if (result.status !== 201) {
      return {
        status: "error",
        message: (await result.json()).message,
      };
    }

    revalidateTag("me");

    return { status: "ok" };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    return { status: "error", message: "Sì è verificato un errore" };
  }
}
