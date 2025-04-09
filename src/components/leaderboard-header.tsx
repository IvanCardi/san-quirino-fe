import BackButton from "./back-button";

export default function LeaderboardHeader({
  subtitle,
  title,
  className,
}: {
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div
      className={`w-screen py-10 px-7 rounded-b-[20px] flex flex-col gap-3 items-center relative ${className}`}
      style={{
        boxShadow: "0px 4px 4px 0px #00000040,0px -4px 4px 0px #00000040 inset",
      }}
    >
      <BackButton className="absolute left-7" />
      <h1 className="uppercase text-white font-bold text-[28px]/[28px]">
        {title}
      </h1>
      <div className="h-[1px] w-[50px] bg-white"></div>
      <p className="italic text-white text-[15px]">{subtitle}</p>
    </div>
  );
}
