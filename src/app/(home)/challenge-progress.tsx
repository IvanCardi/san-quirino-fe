import AnimatedGradient from "@/components/animated-gradient/animated-gradient";
import CircleAvatar from "@/components/circle-avatar";
import { Challenge } from "@/lib/models/challenge";

export default function ChallengeProgress({
  challenge,
  me,
}: {
  me: string;
  challenge: Challenge;
}) {
  const mySelf =
    challenge.challenger.id === me ? challenge.challenger : challenge.opponent;
  const opponent =
    challenge.challenger.id === me ? challenge.opponent : challenge.challenger;

  return (
    <div className="px-5 relative">
      <div className="absolute inset-0 top-[-30px]">
        <div className="px-5 w-full flex justify-between">
          <CircleAvatar
            className="w-10 h-10 border-[2px] !border-[#9ADAED]"
            id={me}
            imageUrl={mySelf.avatar}
          />
          <CircleAvatar
            className="w-10 h-10 border-[2px] !border-[#9ADAED]"
            id={me}
            imageUrl={opponent.avatar}
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="rounded-l-[3px] h-3 w-full bg-[#E2EFF6] border-l border-t border-b border-[#568AEE]">
          <AnimatedGradient
            className="h-full rounded-r-full"
            style={{
              width: `${Math.min(
                100,
                (mySelf.points / challenge.target) * 100
              )}%`,
            }}
          />
        </div>
        <div className="border-[2px] border-[#0773FF] bg-white px-1">
          <p className="uppercase font-inter font-bold text-4/4">sfida</p>
        </div>
        <div className="rounded-r-[3px] h-3 w-full bg-[#E2EFF6] border-r border-t border-b border-[#568AEE] flex justify-end">
          <AnimatedGradient
            className="h-full rounded-l-full"
            style={{
              width: `${Math.min(
                100,
                (opponent.points / challenge.target) * 100
              )}%`,
            }}
          />
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col items-center">
          <p className="font-inter font-medium text-[7px]">{`${mySelf.firstName} ${mySelf.lastName}`}</p>
          <p className="font-inter font-light text-[7px]">
            {mySelf.office?.name}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-inter font-medium text-[7px]">
            {`${opponent.firstName} ${opponent.lastName}`}
          </p>
          <p className="font-inter font-light text-[7px]">
            {opponent.office?.name}
          </p>
        </div>
      </div>
    </div>
  );
}
