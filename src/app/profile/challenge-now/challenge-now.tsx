"use client";
import { createChallenge } from "./actions";
import ChallengeNowButton from "@/components/challenge-now";

export default function ChallengeNow({ agentId }: { agentId: string }) {
  const onClick = async () => {
    await createChallenge(agentId);
  };

  return (
    <div className="mb-[120px] m-auto" onClick={onClick}>
      <ChallengeNowButton />
    </div>
  );
}
