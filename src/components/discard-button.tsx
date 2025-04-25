import { Trash } from "lucide-react";
import { ReactNode } from "react";

export default function DiscardButton({
  onClick,
  children,
  className,
}: {
  onClick: () => void;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-fit border-[2px] border-red-900 bg-red-500 text-white rounded-[7px] flex justify-center items-center px-2 ${className}`}
      onClick={onClick}
      style={{
        boxShadow: "0px 4.5px 4.5px 0px #00000040",
      }}
    >
      {children ? children : <Trash />}
    </div>
  );
}
