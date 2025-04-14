import CircleAvatar from "./circle-avatar";
import RankBadge from "./rank-badge";

export default function RankingItem({
  fullName,
  id,
  image,
  points,
  position,
  className,
}: {
  id: string;
  fullName: string;
  points: number;
  image: string;
  position: number;
  className?: string;
}) {
  return (
    <div
      className={`px-5 py-2 flex items-center justify-between rounded-[10px] bg-[#07465C] ${className}`}
      style={{
        boxShadow:
          " 0px 4px 4px 0px #00000040, 0px -5px 4px 0px #00000040 inset",
      }}
    >
      <div className="flex items-center gap-3">
        <RankBadge rank={position} />
        <div className="flex items-center gap-2">
          <div className="size-[37px]">
            <CircleAvatar
              className="h-full w-full border-[2px]"
              imageUrl={image}
              id={id}
            />
          </div>
          <p className="text-white text-[12px] font-semibold">{fullName}</p>
        </div>
      </div>
      <p className="text-white font-extrabold text-[15px]">
        {points} <span className="font-thin">pt</span>
      </p>
    </div>
  );
}
