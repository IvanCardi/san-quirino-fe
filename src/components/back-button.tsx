"use client";
import { useRouter } from "next/navigation";
import ArrowLeft from "./icons/arrow-left";

export default function BackButton({
  variant = "white",
  className,
}: {
  variant?: "white" | "blue";
  className?: string;
}) {
  const router = useRouter();
  return (
    <div
      className={`size-7 rounded-full bg-transparent border-[2px] flex justify-center items-center ${className} ${
        variant === "blue" ? "border-[#0770F9]" : "border-white"
      }`}
      onClick={() => router.back()}
    >
      <ArrowLeft
        className={variant === "blue" ? "fill-[#0770F9]" : "fill-white"}
      />
    </div>
  );
}
