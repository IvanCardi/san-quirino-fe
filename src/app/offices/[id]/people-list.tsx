"use client";
import CircleAvatar from "@/components/circle-avatar";
import TypeBadge from "@/components/type-badge";
import { useState } from "react";

export default function PeopleList({
  people,
}: {
  people: {
    id: string;
    type: string;
    imageUrl: string;
    fullName: string;
    points: number;
  }[];
}) {
  const [type, setType] = useState("notiziere");

  return (
    <div className="flex flex-col p-6 gap-3 h-full">
      <div className="w-full flex justify-between">
        <div
          key={"notiziere"}
          className="w-[30%]"
          onClick={() => setType("notiziere")}
        >
          <TypeBadge isSelected={type === "notiziere"} label={"Notizieri"} />
        </div>
        <div key={"coach"} className="w-[30%]" onClick={() => setType("coach")}>
          <TypeBadge isSelected={type === "coach"} label={"Coach"} />
        </div>
        <div
          key={"manager"}
          className="w-[30%]"
          onClick={() => setType("manager")}
        >
          <TypeBadge isSelected={type === "manager"} label={"Manager"} />
        </div>
      </div>
      <div className="h-full flex-1 overflow-y-auto pb-[100px]">
        <div className="grid grid-cols-3 gap-[5%] gap-y-2">
          {people
            .filter((p) => p.type === type)
            .map((p) => (
              <PersonItem key={p.id} {...p} />
            ))}
        </div>
      </div>
    </div>
  );
}

function PersonItem({
  fullName,
  imageUrl,
  points,
}: {
  fullName: string;
  imageUrl: string;
  points: number;
}) {
  return (
    <div
      className="w-full rounded-[5px] bg-[#148BB5] py-[10px] flex flex-col gap-1 items-center"
      style={{
        boxShadow: "0px 4px 4px 0px #00000040, 0px 4px 4px 0px #00000040 inset",
      }}
    >
      <CircleAvatar imageUrl={imageUrl} className="border-[2px] !size-[29px]" />
      <p className="text-white text-[10px]/[10px] font-bold">{fullName}</p>
      <p className="text-white text-[10px]/[10px] font-black">
        {points} <span className="font-normal">pt</span>
      </p>
    </div>
  );
}
