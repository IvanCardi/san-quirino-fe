import ChallengeNowButton from "@/components/challenge-now";
import PageAnimation from "@/components/page-animation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { getLeaderboard } from "@/lib/http/getLeaderboard";
import { getMe } from "@/lib/http/getMe";
import { getOffices } from "@/lib/http/getOffices";
import PushNotificationManager from "../(notifications)/notification";
import AcceptOrDeclineChallenge from "./accept-or-decline-challenge";
import ChallengeProgress from "./challenge-progress";
import OfficesPlanets from "./offices-planets";
import People from "./people";
import AgentCard from "./agent-card";

export default async function Home() {
  const agents = (await getLeaderboard(undefined, undefined, undefined)).map(
    (a) => ({
      id: a.agent.id,
      fullName: `${a.agent.firstName} ${a.agent.lastName}`,
      imageUrl: a.agent.avatar,
      type: a.agent.type,
      inChallenge: a.agent.challenge !== undefined,
      office: a.agent.office?.name ?? "",
    })
  );
  const me = await getMe();
  const offices = await getOffices();

  return (
    <PageAnimation className="flex flex-col gap-6 pt-6 h-full">
      <video
        className="absolute top-[-70px] left-0 w-full h-full object-cover z-[-2]"
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
          <Drawer>
            <DrawerTrigger>
              <ChallengeNowButton />
            </DrawerTrigger>
            <DrawerContent className="pb-4">
              <DrawerHeader>
                <DrawerTitle className="!text-[40px]">
                  Chi vuoi sfidare?
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex w-full flex-wrap gap-10 overflow-y-scroll items-center justify-center">
                {agents
                  .filter(
                    (a) =>
                      a.id !== me.id && a.type === me.type && !a.inChallenge
                  )
                  .map((a) => (
                    <DrawerClose key={a.id} className="w-full">
                      <AgentCard agent={a} />
                    </DrawerClose>
                  ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      )}
      {me.challenge?.status === "pending" &&
        me.challenge.opponent.id === me.id && (
          <AcceptOrDeclineChallenge challenge={me.challenge} />
        )}
      {me.challenge?.status === "in_progress" && (
        <>
          <div className="h-10" />
          <ChallengeProgress challenge={me.challenge} me={me.id} />
        </>
      )}
      <PushNotificationManager />
    </PageAnimation>
  );
}
