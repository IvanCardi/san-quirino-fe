"use client";
import TypeBadge from "@/components/type-badge";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { Action } from "@/lib/models/action";
import { useState } from "react";
import MakeCdvContent from "./make-cdv-content/make-cdv-content";

export default function ActionsList({ actions }: { actions: Action[] }) {
  const [open, setOpen] = useState(false);

  const [selectedAction, setSelectedAction] = useState<Action | undefined>(
    undefined
  );
  const [type, setType] = useState("news");

  return (
    <div className="flex flex-col gap-5 px-5 h-full">
      <div className="w-full flex justify-between">
        <div className="w-[30%]" onClick={() => setType("news")}>
          <TypeBadge isSelected={type === "news"} label="Notizie" />
        </div>
        <div className="w-[30%]" onClick={() => setType("cdv")}>
          <TypeBadge isSelected={type === "cdv"} label="CDV" />
        </div>
        <div className="w-[30%]" onClick={() => setType("assignment")}>
          <TypeBadge isSelected={type === "assignment"} label="Incarichi" />
        </div>
      </div>
      <div className="h-full flex-1 overflow-y-auto pb-[113px]">
        <div className="flex flex-col gap-2">
          <Drawer
            open={open}
            onOpenChange={setOpen}
            onClose={() => setSelectedAction(undefined)}
          >
            {actions
              .filter((a) => a.type === type)
              .map((a) => (
                <DrawerTrigger key={a.id} onClick={() => setSelectedAction(a)}>
                  <ActionItem {...a} />
                </DrawerTrigger>
              ))}
            {selectedAction?.type === "news" && (
              <MakeCdvContent
                actionId={selectedAction.id}
                closeDrawer={() => setOpen(false)}
              />
            )}
          </Drawer>
        </div>
      </div>
    </div>
  );
}

function ActionItem({
  address,
  fullName: name,
  phone,
}: {
  id: string;
  type: string;
  fullName: string;
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
