import LeaderboardHeader from "@/components/leaderboard-header";
import { getNotifications } from "@/lib/http/getNotifications";

export default async function NoficationCenterPage() {
  const notifications = await getNotifications();

  return (
    <div className="h-full flex flex-col">
      <LeaderboardHeader
        title="Notifiche"
        subtitle=""
        className="bg-[#02476B]"
      />
      <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-3">
        {notifications.reverse().map((n) => (
          <div key={n.id} className="rounded-[8px] shadow-md px-4 py-3 flex flex-col gap-2">
            <p className="text-[20px]/[20px] font-bold">{n.title}</p>
            <p className="text-[16px]/[16px] font-light">{n.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
