"use client";
import ActionButton from "@/components/action-button";
import CircleAvatar from "@/components/circle-avatar";
import DiscardButton from "@/components/discard-button";
import { Challenge } from "@/lib/models/challenge";
import { Building } from "lucide-react";
import { useState } from "react";
import { acceptChallenge, declineChallenge } from "./actions";

export default function AcceptOrDeclineChallenge({
  challenge,
}: {
  challenge: Challenge;
}) {
  const [isHidden, setIsHidden] = useState(false);

  const onDeclineClick = async () => {
    const response = await declineChallenge(challenge.id);

    if (response.status === "ok") {
      setIsHidden(true);
    }
  };

  const onAcceptClick = async () => {
    const response = await acceptChallenge(challenge.id);

    if (response.status === "ok") {
      setIsHidden(true);
    }
  };

  return (
    !isHidden && (
      <div className="mx-6 px-4 border-2 border-[#053575] rounded-xl py-4 flex flex-col gap-2">
        <p className="uppercase text-[18px] font-bold">Sei stato sfidato! ⚔️</p>
        <div className="flex gap-2">
          <CircleAvatar
            className="w-[50px] h-[50px]"
            imageUrl={challenge.challenger.avatar}
          ></CircleAvatar>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-end">
              <p className="font-semibold text-[16px]/[16px]">
                {`${challenge.challenger.firstName} ${challenge.challenger.lastName}`}{" "}
              </p>
              <div className="flex items-end text-[12px]/[12px]">
                <Building size={14} color="#444" />
                <p className="text-[#444]">
                  {challenge.challenger.office?.name}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div onClick={onAcceptClick}>
                <ActionButton className="!w-[100px] !px-2">
                  Accetta
                </ActionButton>
              </div>
              <DiscardButton
                onClick={onDeclineClick}
                className="!w-[100px] !px-2"
              >
                <p className="text-white text-[17px] font-extrabold uppercase">
                  Rifiuta
                </p>
              </DiscardButton>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
