"use client";
import TypeBadge from "@/components/type-badge";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { Action } from "@/lib/models/action";
import { useState } from "react";
import MakeAssignmentContent from "./make-assignment-content/make-assignment-content";
import MakeCdvContent from "./make-cdv-content/make-cdv-content";
import MakeSaleContent from "./make-sale-content/make-sale-content";

export default function ActionsList({ actions }: { actions: Action[] }) {
  const [open, setOpen] = useState(false);

  const [selectedAction, setSelectedAction] = useState<Action | undefined>(
    undefined
  );
  const [type, setType] = useState("news");

  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="w-full overflow-x-auto px-5 pb-[6px]">
        <div className=" flex flex-nowrap w-max gap-3">
          <div className="w-fit" onClick={() => setType("news")}>
            <TypeBadge isSelected={type === "news"} label="Notizie" />
          </div>
          <div className="w-fit" onClick={() => setType("cdv")}>
            <TypeBadge isSelected={type === "cdv"} label="CDV" />
          </div>
          <div className="w-fit" onClick={() => setType("assignment")}>
            <TypeBadge isSelected={type === "assignment"} label="Incarichi" />
          </div>
          <div className="w-fit" onClick={() => setType("sale")}>
            <TypeBadge isSelected={type === "sale"} label="Vendite" />
          </div>
        </div>
      </div>
      <div className="h-full flex-1 overflow-y-auto px-5 pb-[113px]">
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
            {selectedAction?.type === "cdv" && (
              <MakeAssignmentContent
                actionId={selectedAction.id}
                closeDrawer={() => setOpen(false)}
              />
            )}
            {selectedAction?.type === "assignment" && (
              <MakeSaleContent
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
}: {
  id: string;
  type: string;
  fullName: string;
  phone: string;
  address: string;
}) {
  return (
    <div
      className="rounded-[10px] flex justify-between px-6 py-4 bg-[#25748E]"
      style={{
        boxShadow:
          "0px 4px 4px 0px #00000040, 0px -2px 4px 0px #00000040 inset",
      }}
    >
      <p className="text-[16px]/[16px] text-white font-semibold">{name}</p>
      <p className="text-[16px]/[16px] text-white">{address}</p>
    </div>
  );
}
