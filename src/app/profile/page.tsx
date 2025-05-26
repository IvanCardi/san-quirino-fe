import PageAnimation from "@/components/page-animation";
import { getLoggedUser } from "@/lib/getLoggedUser";
import { getAgent } from "@/lib/http/getAgent";
import { getAvatars } from "@/lib/http/getAvatars";
import { getMe } from "@/lib/http/getMe";
import { PageProps } from "@/lib/pageProps";
import ActionsList from "./actions-list";
import ChallengeNow from "./challenge-now/challenge-now";
import Header from "./header";
import Info from "./info";
import RankPointsBadge from "./rank-points-badge";

export default async function Profile({ searchParams }: PageProps) {
  const agentId = (await searchParams).agentId as string;
  const loggedUser = await getLoggedUser();
  const itsMe = agentId ? loggedUser?.agentId === agentId : true;
  const me = await getMe();

  const agent = itsMe ? me : await getAgent(agentId);
  const avatars = itsMe ? await getAvatars() : [];

  return (
    <PageAnimation className="flex flex-col h-full gap-6">
      <div className="h-full flex flex-col">
        <Header
          photo={agent.avatar}
          avatars={avatars}
          itsMe={itsMe}
          nickname={agent.nickname}
        />
        <div className="min-h-3" />
        <Info
          address={agent.office?.address ?? ""}
          fullName={`${agent.firstName} ${agent.lastName}`}
          office={agent.office?.name ?? ""}
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
          <ActionsList actions={agent.actions} itsMe={itsMe} />
        </div>
        <div className="min-h-1" />
        {!itsMe &&
          !me.challenge &&
          loggedUser?.type === agent.type &&
          !agent.challenge && <ChallengeNow agentId={agent.id} />}
      </div>
    </PageAnimation>
  );
}
