import Link from "next/link";
import CircleAvatar from "./circle-avatar";
import RankBadge from "./rank-badge";

export default function TopScorer({
  id,
  position,
  fullName,
  image,
  office,
  points,
  type,
  className,
  isFirst = false,
}: {
  id: string;
  position: number;
  fullName: string;
  type: string;
  points: number;
  office: string;
  image: string;
  className?: string;
  isFirst?: boolean;
}) {
  return (
    <Link
      href={`/profile?agentId=${id}`}
      className={`rounded-[10px] flex flex-col justify-between items-center pt-[10px] overflow-hidden ${className}`}
      style={{
        boxShadow:
          "0px 2px 4.19px 0px #00000040 inset, 0px 4.19px 4.19px 0px #00000040",
      }}
    >
      <div className="flex flex-col gap-2 items-center">
        <RankBadge rank={position} />
        <p className="text-[10px] font-extrabold text-white">
          {points} <span className="font-normal">pt</span>
        </p>
      </div>
      <div className="bg-[#022131] h-[60px] w-full rounded-t-[12px] flex flex-col justify-end items-center gap-[2px] pb-[6px] text-white relative">
        <div
          className={`${
            isFirst ? "size-[50px] top-[-55%]" : "size-[35px] top-[-30%]"
          } absolute ]`}
        >
          <CircleAvatar id={id} imageUrl={image} className="h-full w-full" />
        </div>
        <p className="font-semibold text-[7px]">{fullName}</p>
        <p className="font-light text-[7px]">{office}</p>
        <p className="font-normal text-[7px] capitalize">
          {type === "news_hunter"
            ? "Notiziere"
            : type === "coach"
            ? "Coach"
            : "Responsabile"}
        </p>
      </div>
    </Link>
  );
}
