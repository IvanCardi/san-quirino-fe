"use client";
import { logout } from "@/lib/http/logout";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LogoutButton({
  variant = "white",
  className,
}: {
  variant?: "white" | "blue";
  className?: string;
}) {
  const router = useRouter();

  const onClick = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <div
      className={`size-7 rounded-full bg-transparent border-[2px] flex justify-center items-center ${className} ${
        variant === "blue" ? "border-[#0770F9]" : "border-white"
      }`}
      onClick={onClick}
    >
      <LogOut size={"18px"} color={variant === "blue" ? "#0770F9" : "#fff"} />
    </div>
  );
}
