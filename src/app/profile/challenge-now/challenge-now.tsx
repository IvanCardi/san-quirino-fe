"use client";
import ActionButton from "@/components/action-button";
import { createChallenge } from "./actions";

export default function ChallengeNow({ agentId }: { agentId: string }) {
  const onClick = async () => {
    await createChallenge(agentId);
  };

  return (
    <div className="mb-[120px] m-auto" onClick={onClick}>
      <ActionButton disabled={false}>Sfida ora</ActionButton>
    </div>
  );
}
