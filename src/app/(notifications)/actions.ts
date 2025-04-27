"use server";
import { getAccessToken } from "@/lib/getAccessToken";
import { PushSubscription } from "web-push";

/* webpush.setVapidDetails(
  "mailto:ivancardillo1996@gmail.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
); */

export async function subscribeUser(pushSub: PushSubscription) {
  const token = await getAccessToken();
  await fetch("http://localhost:3000/subscriptions", {
    method: "POST",
    body: JSON.stringify({
      pushSub,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return { success: true };
}

/* export async function unsubscribeUser() {
  subscriptions = [];
  // In a production environment, you would want to remove the subscription from the database
  // For example: await db.subscriptions.delete({ where: { ... } })
  return { success: true };
} */

/* export async function sendNotification(message: string) {
  if (subscriptions?.length === 0) {
    throw new Error("No subscription available");
  }

  try {
    for (const subscription of subscriptions) {
      await webpush.sendNotification(
        subscription as never,
        JSON.stringify({
          title: "Test Notification",
          body: message,
          icon: "/icon.png",
        })
      );
    }
    return { success: true };
  } catch (error) {
    console.error("Error sending push notification:", error);
    return { success: false, error: "Failed to send notification" };
  }
} */
