// app/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    let isMounted = true; // Prevent state updates on unmounted component

    async function registerAndRedirect() {
      if ("serviceWorker" in navigator && "PushManager" in window) {
        try {
          await navigator.serviceWorker.register("/sw.js", {
            scope: "/", // This scope is good
            // updateViaCache: "none", // 'none' is okay for development, consider defaults for production
          });
          console.log("Service Worker registered successfully");
          if (isMounted) {
            router.push("/home"); // Redirect after successful registration
          }
        } catch (error) {
          console.error("Service Worker registration failed:", error);
          // Decide if you still want to redirect or show an error
          if (isMounted) {
            // Potentially still redirect, or handle error
            router.push("/home");
          }
        }
      } else {
        // Fallback if SW or PushManager not supported
        if (isMounted) {
          router.push("/home");
        }
      }
    }

    registerAndRedirect();

    return () => {
      isMounted = false;
    };
  }, [router]); // router can be a dependency if used, though here it might be stable

  return <>Andromeda</>; // Or a proper loading/splash screen
}
