import { Trash } from "lucide-react";

export default function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="w-fit border-[2px] border-red-900 bg-red-500 text-white rounded-[7px] flex justify-center items-center px-2"
      onClick={onClick}
      style={{
        boxShadow: "0px 4.5px 4.5px 0px #00000040",
      }}
    >
      <Trash />
    </div>
  );
}
