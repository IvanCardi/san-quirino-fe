"use client";
import { useEffect } from "react";

export default function PushManager() {
  useEffect(() => {
    const urlBase64ToUint8Array = (base64String: string) => {
      const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
      const base64 = (base64String + padding)
        .replace(/-/g, "+")
        .replace(/_/g, "/");
      const rawData = atob(base64);
      return new Uint8Array([...rawData].map((char) => char.charCodeAt(0)));
    };

    const init = async () => {
      if (!("serviceWorker" in navigator) || !("PushManager" in window)) return;

      const permission = await Notification.requestPermission();
      if (permission !== "granted") return;

      const reg = await navigator.serviceWorker.register("/sw.js");

      const sub = await reg.pushManager.getSubscription();
      if (!sub) {
        const res = await fetch("/api/public-key");
        const { publicKey } = await res.json();

        const newSub = await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(publicKey),
        });

        await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newSub),
        });
      }
    };

    init();
  }, []);

  return null;
}
