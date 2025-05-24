import PageAnimation from "@/components/page-animation";
import { getLeaderboard } from "@/lib/http/getLeaderboard";
import { getMe } from "@/lib/http/getMe";
import { getOffices } from "@/lib/http/getOffices";
import PushNotificationManager from "../(notifications)/notification";
import AcceptOrDeclineChallenge from "./accept-or-decline-challenge";
import ChallengeProgress from "./challenge-progress";
import OfficesPlanets from "./offices-planets";
import People from "./people";
import ChallengeNowButton from "@/components/challenge-now";

export default async function Home() {
  const agents = (await getLeaderboard(undefined, undefined, undefined)).map(
    (a) => ({
      id: a.agent.id,
      imageUrl: a.agent.avatar,
    })
  );
  const me = await getMe();
  const offices = await getOffices();

  return (
    <PageAnimation className="flex flex-col gap-6 pt-6 pb-[120px]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        src="/background-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <People people={agents} />
      <OfficesPlanets offices={offices} />
      {!me.challenge && (
        <div className="m-auto">
          <div className="h-5"></div>
          <ChallengeNowButton />
        </div>
      )}
      {me.challenge?.status === "pending" &&
        me.challenge.opponent.id === me.id && (
          <AcceptOrDeclineChallenge challenge={me.challenge} />
        )}
      {me.challenge?.status === "in_progress" && (
        <ChallengeProgress challenge={me.challenge} me={me.id} />
      )}
      <PushNotificationManager />
    </PageAnimation>
  );
}
