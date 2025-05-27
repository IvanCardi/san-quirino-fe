import LeaderboardHeader from "@/components/leaderboard-header";
import PageAnimation from "@/components/page-animation";
import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <PageAnimation className="flex flex-col h-full gap-6 w-full">
      <LeaderboardHeader
        title="Leaderboard"
        subtitle="Le leggende del mese"
        className="bg-[#02476B]"
      />
      <div className="flex justify-center">
        <LoaderCircle className="animate-spin" />
      </div>
    </PageAnimation>
  );
}
