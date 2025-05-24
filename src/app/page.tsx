// app/page.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../../public/andromeda-logo.png";

export default function Page() {
  const router = useRouter();
  const [isStandalone, setIsStandalone] = useState<boolean | null>(null);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window.navigator as any).standalone === true;
    setIsStandalone(standalone);

    // if (!standalone) return; // Don't register SW or redirect if not in standalone

    let isMounted = true; // Prevent state updates on unmounted component

    async function registerAndRedirect() {
      if ("serviceWorker" in navigator && "PushManager" in window) {
        try {
          await navigator.serviceWorker.register("/firebase-messaging-sw.js", {
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
  }, []); // router can be a dependency if used, though here it might be stable

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Image src={logo} alt="logo" width={200} height={200} />
      <h1 className="text-[36px]/[36px] font-bold text-[#006e91]">ANDROMEDA</h1>
      {!isStandalone && (
        <p className="mt-6 text-gray-600 max-w-md font-bold">
          Installa l&apos;app sul tuo dispositivo!
        </p>
      )}
    </div>
  );
}
