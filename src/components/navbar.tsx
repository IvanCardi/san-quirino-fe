"use client";
import { getLoggedUser } from "@/lib/getLoggedUser";
import { Building } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Home from "./icons/home-icon";
import Plus from "./icons/plus-icon";
import Profile from "./icons/profile-icon";
import Star from "./icons/star-icon";
import NavbarShape from "./shapes/navbar-shape";

export default function Navbar() {
  const [loggedUser, setLoggedUser] = useState<
    | {
        userId: string;
        agentId: string;
        email: string;
        type: string;
        officeId: string;
      }
    | undefined
  >(undefined);
  const pathName = usePathname();
  const [width, setWidth] = useState(0);

  const getUser = async () => {
    const user = await getLoggedUser();

    if (user) {
      setLoggedUser(user);
    } else {
      setTimeout(getUser, 500);
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    getUser();
  }, []);

  return (
    pathName !== "/login" &&
    pathName !== "/reset-password" && (
      <>
        <div className="min-h-[110px]"></div>
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
            {loggedUser ? (
              <Link href={`/offices/${loggedUser.officeId}`}>
                <Building
                  className={`${
                    pathName.includes("offices")
                      ? "stroke-[#00B5FF]"
                      : "stroke-white"
                  }`}
                />
              </Link>
            ) : (
              <Building
                className={`${
                  pathName.includes("offices")
                    ? "stroke-[#00B5FF]"
                    : "stroke-white"
                }`}
              />
            )}

            <Link href={"/profile"}>
              <Profile
                className={`${pathName === "/profile" && "fill-[#00B5FF]"}`}
              />
            </Link>
          </div>
        </div>
      </>
    )
  );
}
