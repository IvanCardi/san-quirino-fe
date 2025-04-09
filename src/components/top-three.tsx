import TopScorer from "./top-scorer";

export default function TopThree({
  people,
}: {
  people: {
    id: string;
    fullName: string;
    type: string;
    points: number;
    office: string;
    image: string;
  }[];
}) {
  return (
    <div className="flex justify-between px-5 items-end">
      <TopScorer
        {...people[1]}
        position={2}
        className="h-[140px] w-[30%] bg-[#9ADAED]"
      />
      <TopScorer
        {...people[0]}
        position={1}
        className="h-[160px] w-[30%] bg-[#00B5FF]"
        isFirst
      />
      <TopScorer
        {...people[2]}
        position={3}
        className="h-[140px] w-[30%] bg-[#0773FF]"
      />
    </div>
  );
}
