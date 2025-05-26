import RankPointsBadge from "@/app/profile/rank-points-badge";
import PageAnimation from "@/components/page-animation";
import { getAgents } from "@/lib/http/getAgents";
import { getOffice } from "@/lib/http/getOffice";
import { getOfficeAddress } from "@/lib/models/office";
import { PageProps } from "@/lib/pageProps";
import AgentsPlanets from "./agents-planets";
import Header from "./header";
import Info from "./info";
import PeopleList from "./people-list";
import { getOfficeLeaderboard } from "@/lib/http/getOfficeLeaderboard";

export default async function Office(props: PageProps) {
  const officeId = (await props.params).id;
  const office = await getOffice(officeId);
  const agents = await getAgents(officeId);
  const officeLeaderboard = await getOfficeLeaderboard();

  const index = officeLeaderboard.findIndex((el) => el.office.id === officeId);
  const score = officeLeaderboard[index].score;

  return (
    <PageAnimation className="flex flex-col h-full">
      <Header cover={office.cover} logo={office.logo} />
      <div className="min-h-2" />
      <div className="relative">
        <Info
          name={office.name}
          address={getOfficeAddress(office)}
          manager={office.manager?.name ?? ""}
        />
        <div className="min-h-3" />
        <div className="w-full flex justify-center">
          <RankPointsBadge
            backgroundColor="#0771FC"
            label=""
            points={score}
            rank={index + 1}
            width="50%"
          />
        </div>
        <div className="absolute w-full min-h-[200px] top-[-120px] bg-transparent">
          <AgentsPlanets agents={agents} />
        </div>
      </div>
      <div className="min-h-32" />
      <div className="flex-grow overflow-scroll">
        <PeopleList people={agents} />
      </div>
    </PageAnimation>
  );
}
