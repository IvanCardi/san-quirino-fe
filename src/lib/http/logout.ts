"use server";
import { cookies } from "next/headers";

export async function logout() {
  const cookiesSet = await cookies();

  cookiesSet.set("accessToken", "", {
    maxAge: 0, // instantly expire
    path: "/",
  });
  cookiesSet.set("refreshToken", "", {
    maxAge: 0, // instantly expire
    path: "/",
  });
}
