import RankingItem from "./ranking-item";

export default function LeaderboardList({
  people,
  initialRank = 4,
}: {
  people: {
    id: string;
    fullName: string;
    points: number;
    image: string;
  }[];
  initialRank?: number;
}) {
  return (
    <div className="flex-1 overflow-y-auto pb-[110px]">
      <div className="px-5 flex flex-col gap-2 ">
        {people.map((person, index) => (
          <RankingItem
            key={person.id}
            {...person}
            position={initialRank + index}
          />
        ))}
      </div>
    </div>
  );
}
