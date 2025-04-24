import PageAnimation from "@/components/page-animation";
import Challenge from "./challenge";
import People from "./people";
import OrbitingPlanet from "@/components/orbiting-planets";

const people = [
  {
    id: "1",
    imageUrl: "http://localhost:3000/avatar_1.png",
  },
  {
    id: "2",
    imageUrl: "http://localhost:3000/avatar_2.png",
  },
  {
    id: "3",
    imageUrl: "http://localhost:3000/avatar_5.png",
  },
  {
    id: "4",
    imageUrl: "http://localhost:3000/avatar_6.png",
  },
  {
    id: "5",
    imageUrl: "http://localhost:3000/avatar_8.png",
  },
  {
    id: "6",
    imageUrl: "http://localhost:3000/avatar_10.png",
  },
];

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

export default function Home() {
  return (
    <PageAnimation className="flex flex-col gap-6 pt-6">
      <People people={people} />
      <OrbitingPlanet planets={10} />
      {challenge && <Challenge challenge={challenge} me={me} />}
    </PageAnimation>
  );
}
