"use client";

import CircleAvatar from "@/components/circle-avatar";
import { Building } from "lucide-react";
import { createChallenge } from "./actions";

export default function AgentCard({
  agent,
}: {
  agent: { id: string; imageUrl: string; fullName: string; office: string };
}) {
  const onNewChallenge = async (opponentId: string) => {
    await createChallenge(opponentId);
  };

  return (
    <div
      className="flex gap-2 items-center w-full px-4 pb-1.5"
      onClick={() => onNewChallenge(agent.id)}
    >
      <CircleAvatar imageUrl={agent.imageUrl} className="w-[50px] h-[50px]" />
      <div className="flex flex-col items-start">
        <p className="font-bold">{agent.fullName}</p>
        <div className="flex gap-1 items-center">
          <Building size={14} color="#444" />
          <p className="font-extralight">{agent.office}</p>
        </div>
      </div>
    </div>
  );
}
