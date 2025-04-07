"use client";
import { useEffect, useState } from "react";
import NavbarShape from "../shapes/navbar-shape";
import Home from "../icons/home-icon";
import Star from "../icons/star-icon";
import Lightning from "../icons/lightning-icon";
import Profile from "../icons/profile-icon";
import Plus from "../icons/plus-icon";

export default function Navbar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="fixed bottom-0 w-screen">
      <NavbarShape width={`${width}px`} />
      <div className="absolute inset-0 flex px-8 pb-[35px] justify-between items-end">
        <Home />
        <Star />
        <div
          style={{
            background: "linear-gradient(270.95deg, #7ACCFC 5%, #053575 100%)",
          }}
          className="size-[60px] mb-[13px] rounded-full p-[18px]"
        >
          <Plus />
        </div>
        <Lightning />
        <Profile />
      </div>
    </div>
  );
}
