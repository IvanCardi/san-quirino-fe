"use client";
import { useRouter } from "next/navigation";
import ArrowLeft from "./icons/arrow-left";

export default function BackButton({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <div
      className={`size-7 rounded-full bg-transparent border-[2px] border-white flex justify-center items-center ${className}`}
      onClick={() => router.back()}
    >
      <ArrowLeft />
    </div>
  );
}
