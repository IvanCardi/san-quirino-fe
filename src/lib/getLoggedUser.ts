"use server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const ACCESS_SECRET = process.env.ACCESS_SECRET ?? "";

export async function getLoggedUser(): Promise<
  | {
      userId: string;
      agentId: string;
      email: string;
      type: string;
      officeId: string;
    }
  | undefined
> {
  const token = (await cookies())?.get("access_token")?.value;

  if (token) {
    const secretKey = new TextEncoder().encode(ACCESS_SECRET);
    const { payload } = await jwtVerify(token, secretKey);

    return {
      agentId: payload.agentId as string,
      userId: payload.userId as string,
      email: payload.email as string,
      type: payload.type as string,
      officeId: payload.officeId as string
    };
  }

  return undefined;
}
