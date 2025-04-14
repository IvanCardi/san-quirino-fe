"use client";
import { useState } from "react";

export default function ActionsList({
  actions,
}: {
  actions: {
    id: string;
    type: string;
    name: string;
    phone: string;
    address: string;
  }[];
}) {
  const [type, setType] = useState("news");
  return (
    <div className="flex flex-col gap-5 px-5 h-full">
      <div className="w-full flex justify-between">
        <div className="w-[30%]" onClick={() => setType("news")}>
          <ActionTypeBadge isSelected={type === "news"} label="Notizie" />
        </div>
        <div className="w-[30%]" onClick={() => setType("cdv")}>
          <ActionTypeBadge isSelected={type === "cdv"} label="CDV" />
        </div>
        <div className="w-[30%]" onClick={() => setType("assignment")}>
          <ActionTypeBadge
            isSelected={type === "assignment"}
            label="Incarichi"
          />
        </div>
      </div>
      <div className="h-full flex-1 overflow-y-auto pb-[113px]">
        <div className="flex flex-col gap-2">
          {actions
            .filter((a) => a.type === type)
            .map((a) => (
              <ActionItem key={a.id} {...a} />
            ))}
        </div>
      </div>
    </div>
  );
}

function ActionTypeBadge({
  isSelected,
  label,
}: {
  label: string;
  isSelected: boolean;
}) {
  return (
    <div
      className={`py-4 w-full rounded-[5px] ${
        isSelected ? "bg-[#00B5FF]" : "bg-[#70C3DB]"
      }`}
      style={{
        boxShadow:
          "0px 4px 4px 0px #00000040, 0px -1px 6.1px 0px #00000040 inset",
      }}
    >
      <p className="text-white font-bold text-[16px]/[16px] m-auto w-fit">
        {label}
      </p>
    </div>
  );
}

function ActionItem({
  address,
  name,
  phone,
}: {
  id: string;
  type: string;
  name: string;
  phone: string;
  address: string;
}) {
  return (
    <div
      className="rounded-[10px] flex justify-between px-[22px] py-[10px] bg-[#25748E]"
      style={{
        boxShadow:
          "0px 4px 4px 0px #00000040, 0px -2px 4px 0px #00000040 inset",
      }}
    >
      <p className="text-[10px]/[10px] text-white">{name}</p>
      <p className="text-[10px]/[10px] text-white">{phone}</p>
      <p className="text-[10px]/[10px] text-white">{address}</p>
    </div>
  );
}
