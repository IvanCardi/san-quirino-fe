import LeaderboardHeader from "@/components/leaderboard-header";
import LeaderboardList from "@/components/leaderboard-list";
import PageAnimation from "@/components/page-animation";
import TopThree from "@/components/top-three";

const ranking = [
  {
    id: "1",
    fullName: "Mario Rossi",
    type: "notiziere",
    points: 25015,
    office: "Ufficio di Mirandola",
    image: "http://localhost:3000/avatar_1.png",
  },
  {
    id: "2",
    fullName: "Luca Bianchi",
    type: "coach",
    points: 23902,
    office: "Ufficio di Novellara",
    image: "http://localhost:3000/avatar_2.png",
  },
  {
    id: "3",
    fullName: "Marco Verdi",
    type: "coach",
    points: 20184,
    office: "Ufficio di Sassuolo",
    image: "http://localhost:3000/avatar_3.png",
  },
  {
    id: "4",
    fullName: "Carlo neri",
    type: "coach",
    points: 15000,
    office: "Ufficio di Sassuolo",
    image: "http://localhost:3000/avatar_8.png",
  },
  {
    id: "5",
    fullName: "Carlo neri",
    type: "coach",
    points: 14000,
    office: "Ufficio di Sassuolo",
    image: "http://localhost:3000/avatar_9.png",
  },
  {
    id: "6",
    fullName: "Carlo neri",
    type: "coach",
    points: 13000,
    office: "Ufficio di Sassuolo",
    image: "http://localhost:3000/avatar_4.png",
  },
  {
    id: "7",
    fullName: "Carlo neri",
    type: "coach",
    points: 12000,
    office: "Ufficio di Sassuolo",
    image: "http://localhost:3000/avatar_5.png",
  },
  {
    id: "8",
    fullName: "Carlo neri",
    type: "coach",
    points: 11000,
    office: "Ufficio di Sassuolo",
    image: "http://localhost:3000/avatar_1.png",
  },
  {
    id: "9",
    fullName: "Carlo neri",
    type: "coach",
    points: 10000,
    office: "Ufficio di Sassuolo",
    image: "http://localhost:3000/avatar_2.png",
  },
  {
    id: "10",
    fullName: "Carlo neri",
    type: "coach",
    points: 900,
    office: "Ufficio di Sassuolo",
    image: "http://localhost:3000/avatar_1.png",
  },
];

export default function Leaderboard() {
  return (
    <PageAnimation className="flex flex-col h-screen gap-6">
      <LeaderboardHeader
        title="Leaderboard"
        subtitle="Le leggende del mese"
        className="bg-[#02476B]"
      />
      <TopThree people={ranking.slice(0, 3)} />
      <LeaderboardList people={ranking.slice(3)} />
    </PageAnimation>
  );
}
