import { getAccessToken } from "../getAccessToken";
import { Notification } from "../models/notification";

export async function getNotifications(): Promise<Notification[]> {
  const token = await getAccessToken();

  const result = await fetch(`${process.env.BE_BASE_URL}/notifications`, {
    next: { tags: ["notifications"], revalidate: 0 },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const notifications = await result.json();

  return notifications;
}
