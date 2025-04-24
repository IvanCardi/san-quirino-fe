import PageAnimation from "@/components/page-animation";
import ActionsList from "./actions-list";
import Header from "./header";
import Info from "./info";
import RankPointsBadge from "./rank-points-badge";
import { getMe } from "@/lib/http/getMe";

export default async function Profile() {
  const agent = await getMe();

  return (
    <PageAnimation className="flex flex-col h-screen gap-6">
      <div className="h-full flex flex-col">
        <Header photo="aaa" />
        <div className="min-h-3" />
        <Info
          address={agent.office.address}
          fullName={`${agent.firstName} ${agent.lastName}`}
          office={agent.office.name}
        />
        <div className="min-h-6" />
        <div className="px-5 flex justify-between">
          <RankPointsBadge
            label="Classifica generale"
            points={agent.points}
            rank={agent.overallRank}
            width="48%"
            backgroundColor="#0C77A3"
          />
          <RankPointsBadge
            label="Classifica ufficio"
            points={agent.points}
            rank={agent.officeRank}
            width="48%"
            backgroundColor="#0771FC"
          />
        </div>
        <div className="min-h-9" />
        <div className="flex-grow overflow-scroll">
          <ActionsList actions={agent.actions} />
        </div>
      </div>
    </PageAnimation>
  );
}
