"use client";
import { useState, useEffect } from "react";
import { subscribeUser } from "./actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default function PushNotificationManager({
  isSubscribed,
}: {
  isSubscribed: boolean;
}) {
  const [open, setOpen] = useState(true);

  const router = useRouter();

  useEffect(() => {
    // setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

    if ("serviceWorker" in navigator && "PushManager" in window) {
      registerServiceWorker();
    }

    if (isSubscribed) {
      checkSubscription().then((res) => {
        if (!res) {
          subscribeToPush();
        }
      });
    }
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        if (registration.active) {
          registration.active.postMessage({ action: "getPendingNavigation" });
        }
      });

      navigator.serviceWorker.addEventListener("message", (event) => {
        if (event.data?.action === "navigate" && event.data.url) {
          console.log("Navigating to", event.data.url);
          router.push(event.data.url);
        }
      });
    }
  }, [router]);

  async function checkSubscription() {
    const registration = await navigator.serviceWorker.ready;

    return !!(await registration.pushManager.getSubscription());
  }

  async function registerServiceWorker() {
    await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    });
  }

  async function subscribeToPush() {
    try {
      const registration = await navigator.serviceWorker.ready;
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
        ),
      });
      const serializedSub = JSON.parse(JSON.stringify(sub));
      await subscribeUser(serializedSub);
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  if (!isSubscribed) {
    return (
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Attiva le notifiche</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => subscribeToPush()}>
              Attiva
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  return <></>;
}