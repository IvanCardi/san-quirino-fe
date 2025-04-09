export default function PositionBadge({
  position,
  className,
}: {
  position: number;
  className?: string;
}) {
  return (
    <div
      className={`size-7 bg-[#83D2F3] text-white flex justify-center items-center text-[18px] font-bold rounded-full ${className}`}
      style={{
        boxShadow: "0px 1.83px 3.66px 0px #00000040",
      }}
    >
      {position}
    </div>
  );
}
