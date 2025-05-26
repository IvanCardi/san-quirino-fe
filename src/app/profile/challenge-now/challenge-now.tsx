"use client";
import { createChallenge } from "./actions";
import ChallengeNowButton from "@/components/challenge-now";

export default function ChallengeNow({ agentId }: { agentId: string }) {
  const onClick = async () => {
    await createChallenge(agentId);
  };

  return (
    <div className="absolute bottom-[13%] right-0 left-0 pb-2 flex justify-center z-20" onClick={onClick}>
      <ChallengeNowButton />
    </div>
  );
}
