import webpush from "web-push";
import { subscriptions } from "../subscribe/route";

webpush.setVapidDetails(
  "mailto:ivancardillo1996@gmail.com",
  process.env.VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function POST(request: Request) {
  const { title, body } = await request.json();
  const payload = JSON.stringify({ title, body });

  const results = await Promise.allSettled(
    subscriptions.map((sub) =>
      webpush
        .sendNotification(sub as unknown as never, payload)
        .catch((err) => {
          console.error("Push error", err);
        })
    )
  );

  return Response.json({ message: "Notifications sent", results });
}
