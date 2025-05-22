"use client"
import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    // setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

    if ("serviceWorker" in navigator && "PushManager" in window) {
      registerServiceWorker();
    }
  }, []);

  async function registerServiceWorker() {
    await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    });
  }

  return <></>;
}
