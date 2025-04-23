"use server";
import { ServerActionResponse } from "@/lib/serverActionResponse";

export async function createNews(data: {
  firstName: string;
  lastName: string;
  fullAddress: string;
  phone: string;
}): Promise<ServerActionResponse> {
  try {
    const result = await fetch(`${process.env.BE_BASE_URL}/agents/news`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        userId: "c17c54fa-00fd-45d1-9299-7f3bb3c5cb7a",
      }),
    });

    if (result.status !== 201) {
      return {
        status: "error",
        message: (await result.json()).message,
      };
    }

    return { status: "ok" };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    return { status: "error", message: "" };
  }
}
