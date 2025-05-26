/* eslint-disable @next/next/no-img-element */
"use client";
import BackButton from "@/components/back-button";
import CircleAvatar from "@/components/circle-avatar";
import LogoutButton from "@/components/logout-button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Edit2 } from "lucide-react";
import Image from "next/image";
import header from "../../../public/profile-header.png";
import { changeAvatar } from "./actions";
import EditNicknameForm from "./edit-nickname-form";
import { useState } from "react";

export default function Header({
  photo,
  avatars,
  itsMe,
  nickname,
}: {
  photo: string;
  avatars: string[];
  itsMe: boolean;
  nickname: string;
}) {
  const [open, setOpen] = useState(false);

  const onImageClick = async (avatar: string) => {
    await changeAvatar(avatar);
  };

  return (
    <div className="w-full relative min-h-[190px]">
      <Image
        src={header}
        alt="header"
        className="w-full h-[150px] object-cover"
      ></Image>
      <div className="absolute bottom-[-10px] flex flex-col items-center left-0 right-0 gap-2">
        {avatars.length === 0 ? (
          <CircleAvatar id="id" imageUrl={photo}></CircleAvatar>
        ) : (
          <Drawer>
            <DrawerTrigger>
              <CircleAvatar id="id" imageUrl={photo}></CircleAvatar>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="!text-[40px]">
                  Scegli l&apos;avatar
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex w-full flex-wrap gap-10 overflow-y-scroll items-center justify-center">
                {avatars.map((a) => (
                  <DrawerClose
                    key={a}
                    className="w-[40%] aspect-square"
                    onClick={() => onImageClick(a)}
                  >
                    <img src={`${a}`} alt="avatar" />
                  </DrawerClose>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        )}
        <div className="flex gap-1 items-center">
          <p>{nickname}</p>
          {itsMe && (
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger>
                <Edit2 size={16} />
              </DrawerTrigger>
              <DrawerContent className="pb-5">
                <DrawerHeader>
                  <DrawerTitle className="!text-[40px]">
                    Modifica nickname
                  </DrawerTitle>
                </DrawerHeader>
                <EditNicknameForm
                  nickname={nickname}
                  closeDrawer={() => setOpen(false)}
                />
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </div>
      <BackButton className="absolute top-[65px] left-[30px]" />
      {itsMe && <LogoutButton className="absolute top-[65px] right-[30px]" />}
    </div>
  );
}
