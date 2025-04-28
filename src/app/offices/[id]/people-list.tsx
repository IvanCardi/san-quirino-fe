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
    avatar: string;
    firstName: string;
    lastName: string;
    points: number;
  }[];
}) {
  const [type, setType] = useState("news_hunter");

  return (
    <div className="flex flex-col p-6 gap-3 h-full z-[100]">
      <div className="w-full flex gap-4">
        <div
          key={"news_hunter"}
          className="w-fit"
          onClick={() => setType("news_hunter")}
        >
          <TypeBadge isSelected={type === "news_hunter"} label={"Notizieri"} />
        </div>
        <div key={"coach"} className="w-fit" onClick={() => setType("coach")}>
          <TypeBadge isSelected={type === "coach"} label={"Coach"} />
        </div>
        {/*  <div
          key={"manager"}
          className="w-fit"
          onClick={() => setType("manager")}
        >
          <TypeBadge isSelected={type === "manager"} label={"Responsabile"} />
        </div> */}
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
  firstName,
  lastName,
  avatar,
  points,
}: {
  firstName: string;
  lastName: string;
  avatar: string;
  points: number;
}) {
  return (
    <div
      className="w-full rounded-[5px] bg-[#148BB5] py-[10px] flex flex-col gap-1 items-center"
      style={{
        boxShadow: "0px 4px 4px 0px #00000040, 0px 4px 4px 0px #00000040 inset",
      }}
    >
      <CircleAvatar imageUrl={avatar} className="border-[2px] !size-[29px]" />
      <p className="text-white text-[10px]/[10px] font-bold">
        {firstName} {lastName}
      </p>
      <p className="text-white text-[10px]/[10px] font-black">
        {points} <span className="font-normal">pt</span>
      </p>
    </div>
  );
}
