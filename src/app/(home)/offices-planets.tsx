/* eslint-disable @next/next/no-img-element */
"use client";
import OrbitingPlanets from "@/components/orbiting-planets";
import { Office } from "@/lib/models/office";
import { useRouter } from "next/navigation";

export default function OfficesPlanets(props: { offices: Office[] }) {
  const router = useRouter();
  return (
    <OrbitingPlanets
      planets={props.offices}
      PlanetRender={({ planet }) => (
        <div
          className="min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] flex justify-center items-center"
          onClick={() => router.push(`/offices/${planet.id}`)}
        >
          <img
            className=" w-full object-contain"
            src={"/uploads/logo.png"}
            alt="office"
          />
        </div>
      )}
    ></OrbitingPlanets>
  );
}
