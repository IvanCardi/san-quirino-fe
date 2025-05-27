import PageAnimation from "@/components/page-animation";
import PushNotificationManager from "../(notifications)/notification";
import OfficesPlanets from "./offices-planets";
import People from "./people";
import { LoaderCircle } from "lucide-react";

export default function Home() {
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
      <People people={[]} />
      <LoaderCircle className="animate-spin" />
      <OfficesPlanets offices={[]} />
      <PushNotificationManager />
    </PageAnimation>
  );
}
