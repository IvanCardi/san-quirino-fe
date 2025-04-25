"use server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const ACCESS_SECRET = process.env.ACCESS_SECRET ?? "";

export async function itsMe(id: string) {
  const token = (await cookies())?.get("access_token")?.value;

  if (token) {
    const secretKey = new TextEncoder().encode(ACCESS_SECRET);
    const { payload } = await jwtVerify(token, secretKey);

    return payload.agentId === id;
  }

  return false;
}
