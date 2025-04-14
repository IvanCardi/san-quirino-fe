export default function TypeBadge({
  isSelected,
  label,
}: {
  label: string;
  isSelected: boolean;
}) {
  return (
    <div
      className={`py-4 w-full rounded-[5px] ${
        isSelected ? "bg-[#00B5FF]" : "bg-[#70C3DB]"
      }`}
      style={{
        boxShadow:
          "0px 4px 4px 0px #00000040, 0px -1px 6.1px 0px #00000040 inset",
      }}
    >
      <p className="text-white font-bold text-[16px]/[16px] m-auto w-fit">
        {label}
      </p>
    </div>
  );
}
