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
      <div className="absolute inset-0 top-[-52.5px] z-10">
        <div className="px-5 w-full flex justify-between">
          <CircleAvatar
            className="w-14 h-14 border-[2px] !border-[#9ADAED]"
            id={me}
            imageUrl={mySelf.avatar}
          />
          <CircleAvatar
            className="w-14 h-14 border-[2px] !border-[#9ADAED]"
            id={me}
            imageUrl={opponent.avatar}
          />
        </div>
      </div>
      <div className="flex items-center relative">
        <div className="rounded-l-[3px] h-6 w-full bg-[#E2EFF6] border-l border-t border-b border-[#568AEE]">
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
        <div className="rounded-r-[3px] h-6 w-full bg-[#E2EFF6] border-r border-t border-b border-[#568AEE] flex justify-end">
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10  flex items-center justify-center">
          <p className="font-bold text-4xl">⚔️</p>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col items-start">
          <p className="font-inter font-bold text-[14px]">{`${mySelf.firstName} ${mySelf.lastName}`}</p>
          <p className="font-inter font-light text-[12px]">
            {mySelf.office?.name}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <p className="font-inter font-bold text-[14px]">
            {`${opponent.firstName} ${opponent.lastName}`}
          </p>
          <p className="font-inter font-light text-[12px]">
            {opponent.office?.name}
          </p>
        </div>
      </div>
    </div>
  );
}
