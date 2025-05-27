"use client";
import CircleAvatar from "@/components/circle-avatar";
import OrbitingPlanets from "@/components/orbiting-planets";
import { Agent } from "@/lib/models/agent";
import { useRouter } from "next/navigation";

export default function AgentsPlanets(props: { agents: Agent[] }) {
  const router = useRouter();

  return (
    <OrbitingPlanets
      planets={props.agents}
      hideLogo
      PlanetRender={({ planet }) => (
        <div onClick={() => router.push(`/profile?agentId=${planet.id}`)}>
          {" "}
          <CircleAvatar className="w-10 h-10" imageUrl={planet.avatar} />
        </div>
      )}
    ></OrbitingPlanets>
  );
}
