"use client";
import { getToken, messaging, onMessage } from "@/lib/firebaseClient";
import { useEffect } from "react";
import { subscribeUser } from "./actions";
import { toast } from "sonner";
import Image from "next/image";
import logo from "../../../public/andromeda-logo.png";

export default function PushNotificationManager() {
  useEffect(() => {
    const initNotifications = async () => {
      const permission = Notification.permission;

      if (permission === "granted") {
        const currentToken = await getToken(messaging, {
          vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
        });

        if (currentToken) {
          await subscribeToPush(currentToken);
        }
      } else if (permission === "default") {
        // Ask for permission only if not yet granted or denied
        const newPermission = await Notification.requestPermission();

        if (newPermission === "granted") {
          const currentToken = await getToken(messaging, {
            vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
          });

          if (currentToken) {
            await subscribeToPush(currentToken);
          }
        }
      }
    };

    initNotifications();

    // Foreground message listener
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log("Message received: ", payload);
      toast(payload.data?.title, {
        position: "top-center",
        description: payload.data?.body,
        icon: <Image src={logo} alt="logo" width={50} height={50} />,
      });

      if (typeof window !== "undefined" && "vibrate" in navigator) {
        navigator.vibrate([100, 50, 100]); // Vibrate for 200ms
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function subscribeToPush(token: string) {
    try {
      await subscribeUser(token);
    } catch (error) {
      console.error(error);
    }
  }

  return <></>;
}
