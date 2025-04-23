"use client";
import { useEffect, useState } from "react";
import NavbarShape from "./shapes/navbar-shape";
import Home from "./icons/home-icon";
import Star from "./icons/star-icon";
import Lightning from "./icons/lightning-icon";
import Profile from "./icons/profile-icon";
import Plus from "./icons/plus-icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    pathName !== "/login" && (
      <div className="fixed bottom-0 w-screen">
        <NavbarShape width={`${width}px`} />
        <div className="absolute inset-0 flex px-8 pb-[35px] justify-between items-end">
          <Link href={"/"}>
            <Home className={`${pathName === "/" && "stroke-[#00B5FF]"}`} />
          </Link>
          <Link href={"/general-leaderboard"}>
            <Star
              className={`${
                pathName === "/general-leaderboard" && "stroke-[#00B5FF]"
              }`}
            />
          </Link>
          <Link href={"/notizia"}>
            <div
              style={{
                background:
                  "linear-gradient(270.95deg, #7ACCFC 5%, #053575 100%)",
              }}
              className="size-[60px] mb-[13px] rounded-full p-[18px]"
            >
              <Plus />
            </div>
          </Link>
          <Link href={"/role-leaderboard"}>
            <Lightning
              className={`${
                pathName === "/role-leaderboard" && "stroke-[#00B5FF]"
              }`}
            />
          </Link>
          <Link href={"/profile"}>
            <Profile
              className={`${pathName === "/profile" && "fill-[#00B5FF]"}`}
            />
          </Link>
        </div>
      </div>
    )
  );
}
