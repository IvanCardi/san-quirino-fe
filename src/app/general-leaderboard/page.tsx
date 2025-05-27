import LeaderboardFilters from "@/components/leaderboard-filter";
import LeaderboardHeader from "@/components/leaderboard-header";
import LeaderboardList from "@/components/leaderboard-list";
import TopThree from "@/components/top-three";
import { getLeaderboard } from "@/lib/http/getLeaderboard";
import { getOffices } from "@/lib/http/getOffices";
import { PageProps } from "@/lib/pageProps";

export default async function Leaderboard(props: PageProps) {
  const { name, year, office } = await props.searchParams;

  const agents = (
    await getLeaderboard(
      name as string | undefined,
      office as string | undefined,
      year as string | undefined
    )
  ).map((a) => ({
    id: a.agent.id,
    fullName: `${a.agent.firstName} ${a.agent.lastName}`,
    type: a.agent.type,
    points: a.score,
    office: a.agent.office?.name ?? "",
    image: a.agent.avatar,
  }));

  const offices = await getOffices();

  return (
    <div className="flex flex-col h-full gap-6 w-full">
      <LeaderboardHeader
        title="Leaderboard"
        subtitle="Le leggende del mese"
        className="bg-[#02476B]"
      />
      <TopThree people={agents.slice(0, 3)} />
      <LeaderboardFilters offices={offices} />
      <LeaderboardList people={agents.slice(3)} />
    </div>
  );
}
