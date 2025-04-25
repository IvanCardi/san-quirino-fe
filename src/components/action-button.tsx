import { ReactNode } from "react";

export default function ActionButton({
  disabled = false,
  children,
  className,
}: {
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`w-fit border-[2px]  ${
        disabled ? "bg-[#ddd] border-[#bbb] " : "bg-[#FFAC2D] border-[#053575]"
      } py-[6px] px-8 text-white text-[17px] font-extrabold uppercase rounded-[7px] ${className}`}
      style={{
        boxShadow: "0px 4.5px 4.5px 0px #00000040",
      }}
    >
      {children}
    </div>
  );
}
