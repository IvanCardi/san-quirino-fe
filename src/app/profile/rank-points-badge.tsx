import RankBadge from "@/components/rank-badge";

export default function RankAndPointsBadge({
  label,
  points,
  rank,
  width,
  backgroundColor,
}: {
  points: number;
  rank: number;
  label: string;
  width: string;
  backgroundColor: string;
}) {
  return (
    <div className={`flex flex-col gap-2 items-center`} style={{ width }}>
      <p className="text-[12px]/[12px] font-extralight italic">{label}</p>
      <div
        className="rounded-[26px] w-full px-[22px] py-[10px] flex justify-between items-center"
        style={{
          backgroundColor,
          boxShadow:
            "0px 4px 4px 0px #00000040, 0px -3px 4px 0px #00000040 inset",
        }}
      >
        <RankBadge rank={rank} />
        <p className="text-[18px]/[18px] font-extrabold text-white">
          {points}
          <span className="font-light">pt</span>
        </p>
      </div>
    </div>
  );
}
