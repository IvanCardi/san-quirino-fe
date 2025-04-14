import Image from "next/image";
import header from "../../../public/profile-header.png";
import CircleAvatar from "@/components/circle-avatar";
import BackButton from "@/components/back-button";

export default function Header({ photo }: { photo: string }) {
  return (
    <div className="w-full relative min-h-[190px]">
      {/*  <div
        className="absolute top-[0px] w-[800px] h-[800px] bg-yellow-600 rounded-full "
        style={{
          width: 2 * width,
          top: -0.85 * (2 * width),
          left: "50%",
          transform: "translateX(-50%)",
        }}
      ></div> */}
      {/*  <svg
        style={{
          width: "100%",
          height: "auto",
        }}
        width={width}
        height="140"
        viewBox={`0 0 375 140`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={`M188.5 140C107 140 30 119.496 0 102.628V-10H375V102.628C346 119.496 270 140 188.5 140Z`}
          fill="#8689F3"
        />
      </svg> */}
      <Image
        src={header}
        alt="header"
        className="w-full h-[150px] object-cover"
      ></Image>
      <div className="absolute bottom-0" style={{ left: "calc(50% - 38px)" }}>
        <CircleAvatar id="id" imageUrl={photo}></CircleAvatar>
      </div>
      <BackButton className="absolute top-[65px] left-[30px]" />
    </div>
  );
}
