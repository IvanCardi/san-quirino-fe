import LeaderboardHeader from "@/components/leaderboard-header";
import PageAnimation from "@/components/page-animation";
import { LoaderCircle } from "lucide-react";

export default function LoadingNoficationCenterPage() {
  return (
    <PageAnimation className="h-full flex flex-col">
      <LeaderboardHeader
        title="Notifiche"
        subtitle="Le tue notifiche"
        className="bg-[#02476B]"
      />
      <div className="flex justify-center w-full">
        <LoaderCircle className="animate-spin" />
      </div>
    </PageAnimation>
  );
}
