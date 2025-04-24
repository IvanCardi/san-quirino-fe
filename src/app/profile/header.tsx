"use client";
import BackButton from "@/components/back-button";
import CircleAvatar from "@/components/circle-avatar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import header from "../../../public/profile-header.png";
import { changeAvatar } from "./actions";
import { useState } from "react";

export default function Header({
  photo,
  avatars,
  baseUrl,
}: {
  photo: string;
  avatars: string[];
  baseUrl: string;
}) {
  const [avatar, setAvatar] = useState(photo);

  const onImageClick = async (avatar: string) => {
    const response = await changeAvatar(avatar);

    if (response.status === "ok") {
      setAvatar(`${baseUrl}${avatar}`);
    }
  };

  return (
    <div className="w-full relative min-h-[190px]">
      <Image
        src={header}
        alt="header"
        className="w-full h-[150px] object-cover"
      ></Image>
      <div className="absolute bottom-0" style={{ left: "calc(50% - 38px)" }}>
        <Drawer>
          <DrawerTrigger>
            <CircleAvatar id="id" imageUrl={avatar}></CircleAvatar>
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
                  <img src={`${baseUrl}${a}`} alt="avatar" />
                </DrawerClose>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      <BackButton className="absolute top-[65px] left-[30px]" />
    </div>
  );
}
