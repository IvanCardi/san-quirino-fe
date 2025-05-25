"use server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const ACCESS_SECRET = process.env.ACCESS_SECRET ?? "";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    return NextResponse.next();
  }

  const accessToken = req.cookies.get("access_token")?.value;

  if (!accessToken) {
    if (req.nextUrl.pathname === "/login") {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (await isAuthenticated(accessToken)) {
    if (req.nextUrl.pathname === "/login") {
      return NextResponse.redirect(new URL("/home", req.url));
    }

    let user;

    try {
      user = await getUser(accessToken);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      user = undefined;
    }

    if (!user) {
      (await cookies()).delete("access_token");
      (await cookies()).delete("refresh_token");

      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (
      !user.isPasswordResetAfterFirstLogin &&
      req.nextUrl.pathname !== "/reset-password"
    ) {
      return NextResponse.redirect(new URL("/reset-password", req.url));
    }

    return NextResponse.next();
  } else {
    const refreshToken = req.cookies.get("refresh_token")?.value;

    if (!refreshToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    const accessToken = await refresh(refreshToken);

    if (!accessToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (await isAuthenticated(accessToken)) {
      (await cookies()).set({
        name: "access_token",
        value: accessToken ?? "",
        path: "/",
        sameSite: "none", // <‑‑ must be 'none'
        secure: true,
        httpOnly: true,
        maxAge: 60 * 60,
      });

      if (req.nextUrl.pathname === "/login") {
        return NextResponse.redirect(new URL("/home", req.url));
      }

      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}

async function isAuthenticated(accessToken: string): Promise<boolean> {
  try {
    const secretKey = new TextEncoder().encode(ACCESS_SECRET);
    await jwtVerify(accessToken, secretKey);

    return true;
  } catch (error) {
    console.error("JWT verification failed:", error);

    return false;
  }
}

async function refresh(refreshToken: string): Promise<string | undefined> {
  try {
    const response = await fetch(`${process.env.BE_BASE_URL}/refresh`, {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: `bearer ${refreshToken}`,
      }, // Ensures cookies are sent with the request
    });

    if (!response.ok) {
      return undefined;
    }

    return (await response.json()).accessToken;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return undefined;
  }
}

async function getUser(accessToken: string): Promise<
  | {
      id: string;
      email: string;
      isPasswordResetAfterFirstLogin: boolean;
    }
  | undefined
> {
  const result = await fetch(`${process.env.BE_BASE_URL}/users`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  if (result.status === 200) {
    return await result.json();
  }
}

// Apply middleware to protected routes
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|login|manifest.json|manifest.webmanifest|sw.js|firebase-messaging-sw.js|web-app-manifest-192x192.png|web-app-manifest-512x512.png).*)",
  ],
};
