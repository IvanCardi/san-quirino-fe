import PageAnimation from "@/components/page-animation";
import { getIsSubscribed } from "@/lib/http/getIsSubscribed";
import { getLeaderboard } from "@/lib/http/getLeaderboard";
import { getMe } from "@/lib/http/getMe";
import { getOffices } from "@/lib/http/getOffices";
import PushNotificationManager from "../(notifications)/notification";
import AcceptOrDeclineChallenge from "./accept-or-decline-challenge";
import ChallengeProgress from "./challenge-progress";
import OfficesPlanets from "./offices-planets";
import People from "./people";

export default async function Home() {
  const isSubscribed = await getIsSubscribed();

  const agents = (await getLeaderboard()).map((a) => ({
    id: a.agent.id,
    imageUrl: a.agent.avatar,
  }));
  const me = await getMe();
  const offices = await getOffices();

  return (
    <PageAnimation className="flex flex-col gap-6 pt-6 pb-[120px]">
      <People people={agents} />
      <OfficesPlanets offices={offices} />
      {me.challenge?.status === "pending" &&
        me.challenge.opponent.id === me.id && (
          <AcceptOrDeclineChallenge challenge={me.challenge} />
        )}
      {me.challenge?.status === "in_progress" && (
        <ChallengeProgress challenge={me.challenge} me={me.id} />
      )}
      <PushNotificationManager isSubscribed={isSubscribed} />
    </PageAnimation>
  );
}
