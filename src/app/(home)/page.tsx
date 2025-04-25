import OrbitingPlanet from "@/components/orbiting-planets";
import PageAnimation from "@/components/page-animation";
import { getLeaderboard } from "@/lib/http/getLeaderboard";
import Challenge from "./challenge";
import People from "./people";

const me = {
  id: "1",
  fullName: "Ivan Cardillo",
  office: "Agenzia 1",
  imageUrl: "http://localhost:3000/avatar_1.png",
  points: 1500,
};

const challenge = {
  target: 3000,
  challenger: {
    id: "1",
    fullName: "Jacopo Crincoli",
    office: "Agenzia 2",
    imageUrl: "http://localhost:3000/avatar_1.png",
    points: 2000,
  },
};

export default async function Home() {
  const agents = (await getLeaderboard()).map((a) => ({
    id: a.agent.id,
    imageUrl: `${process.env.BE_BASE_URL}${a.agent.avatar}`,
  }));

  return (
    <PageAnimation className="flex flex-col gap-6 pt-6">
      <People people={agents} />
      <OrbitingPlanet planets={10} />
      {challenge && <Challenge challenge={challenge} me={me} />}
    </PageAnimation>
  );
}
