import PageAnimation from "@/components/page-animation";
import { getAvatars } from "@/lib/http/getAvatars";
import { getMe } from "@/lib/http/getMe";
import { itsMe } from "@/lib/itsMe";
import { PageProps } from "@/lib/pageProps";
import ActionsList from "./actions-list";
import Header from "./header";
import Info from "./info";
import RankPointsBadge from "./rank-points-badge";
import { getAgent } from "@/lib/http/getAgent";
import ActionButton from "@/components/action-button";

export default async function Profile({ searchParams }: PageProps) {
  const agentId = (await searchParams).agentId as string;
  const itsMeFlag = agentId ? await itsMe(agentId) : true;

  const agent = itsMeFlag ? await getMe() : await getAgent(agentId);
  const avatars = itsMeFlag ? await getAvatars() : [];

  return (
    <PageAnimation className="flex flex-col h-screen gap-6">
      <div className="h-full flex flex-col">
        <Header
          photo={`${process.env.BE_BASE_URL}${agent.avatar}`}
          avatars={avatars}
          baseUrl={process.env.BE_BASE_URL ?? ""}
        />
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
        <div className="min-h-7" />
        <div className="flex-grow overflow-scroll">
          <ActionsList actions={agent.actions} itsMe={itsMeFlag} />
        </div>
        <div className="min-h-3" />
        {!itsMeFlag && (
          <div className="mb-[120px] m-auto">
            <ActionButton disabled={false}>Sfida ora</ActionButton>
          </div>
        )}
      </div>
    </PageAnimation>
  );
}
