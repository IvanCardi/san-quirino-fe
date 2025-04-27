import OrbitingPlanet from "@/components/orbiting-planets";
import PageAnimation from "@/components/page-animation";
import { getLeaderboard } from "@/lib/http/getLeaderboard";
import ChallengeProgress from "./challenge-progress";
import People from "./people";
import { getMe } from "@/lib/http/getMe";
import AcceptOrDeclineChallenge from "./accept-or-decline-challenge";
import PushNotificationManager from "../(notifications)/notification";
import { getIsSubscribed } from "@/lib/http/getIsSubscribed";

export default async function Home() {
  const isSubscribed = await getIsSubscribed();

  const agents = (await getLeaderboard()).map((a) => ({
    id: a.agent.id,
    imageUrl: a.agent.avatar,
  }));
  const me = await getMe();

  return (
    <PageAnimation className="flex flex-col gap-6 pt-6 pb-[120px]">
      <People people={agents} />
      <OrbitingPlanet planets={10} />
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
