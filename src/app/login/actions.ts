"use server";
import { ServerActionResponse } from "@/lib/serverActionResponse";
import { cookies } from "next/headers";

export async function login(
  email: string,
  password: string
): Promise<ServerActionResponse> {
  try {
    const url = `${process.env.BE_BASE_URL}/login`;

    const result = await fetch(url, {
      credentials: "include", // Important
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": `${process.env.BE_BASE_URL}`,
      },
      body: JSON.stringify({ email, password }),
    });

    if (result.status !== 200) {
      return {
        status: "error",
        message: (await result.json()).message,
      };
    }

    const body = await result.json();

    (await cookies()).set({
      name: "access_token",
      value: body.accessToken ?? "",
      path: "/",
      sameSite: "lax", // <‑‑ must be 'none'
      secure: false,
      domain: "localhost",
      httpOnly: true,
    });
    (await cookies()).set({
      name: "refresh_token",
      value: body.refreshToken ?? "",
      path: "/",
      sameSite: "lax", // <‑‑ must be 'none'
      secure: false,
      domain: "localhost",
      httpOnly: true,
    });

    return { status: "ok" };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    return { status: "error", message: "" };
  }
}
