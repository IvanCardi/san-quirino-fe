"use server";

import webpush from "web-push";

webpush.setVapidDetails(
  "mailto:ivancardillo1996@gmail.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

let subscriptions: PushSubscription[] = [];

export async function subscribeUser(sub: PushSubscription) {
  subscriptions.push(sub);
  // In a production environment, you would want to store the subscription in a database
  // For example: await db.subscriptions.create({ data: sub })
  return { success: true };
}

export async function unsubscribeUser() {
  subscriptions = [];
  // In a production environment, you would want to remove the subscription from the database
  // For example: await db.subscriptions.delete({ where: { ... } })
  return { success: true };
}

export async function sendNotification(message: string) {
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
}
