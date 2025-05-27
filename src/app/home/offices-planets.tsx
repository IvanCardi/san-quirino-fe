/* eslint-disable @next/next/no-img-element */
"use client";
import OrbitingPlanets from "@/components/orbiting-planets";
import { Office } from "@/lib/models/office";
import { useRouter } from "next/navigation";

export default function OfficesPlanets(props: { offices: Office[] }) {
  const router = useRouter();
  return (
    <OrbitingPlanets
      hideLogo
      planets={props.offices}
      PlanetRender={({ planet }) => (
        <div
          className="relative min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] flex justify-center items-center bg-transparent rounded-full"
          onClick={() => router.push(`/offices/${planet.id}`)}
        >
          <img
            className="w-full object-contain"
            src={planet.logo}
            alt="office"
          />
        </div>
      )}
    ></OrbitingPlanets>
  );
}
