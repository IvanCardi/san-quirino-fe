import LeaderboardHeader from "@/components/leaderboard-header";
import LeaderboardList from "@/components/leaderboard-list";
import PageAnimation from "@/components/page-animation";
import TopThree from "@/components/top-three";
import { getLeaderboard } from "@/lib/http/getLeaderboard";

export default async function Leaderboard() {
  const agents = (await getLeaderboard()).map((a) => ({
    id: a.agent.id,
    fullName: `${a.agent.firstName} ${a.agent.lastName}`,
    type: a.agent.type,
    points: a.score,
    office: a.agent.office.name,
    image: a.agent.avatar,
  }));

  return (
    <PageAnimation className="flex flex-col h-screen gap-6 w-full">
      <LeaderboardHeader
        title="Leaderboard"
        subtitle="Le leggende del mese"
        className="bg-[#02476B]"
      />
      <TopThree people={agents.slice(0, 3)} />
      <LeaderboardList people={agents.slice(3)} />
    </PageAnimation>
  );
}
