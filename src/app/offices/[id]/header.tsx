import BackButton from "@/components/back-button";
import CircleAvatar from "@/components/circle-avatar";

export default function Header({
  cover,
  logo,
}: {
  cover: string;
  logo: string;
}) {
  return (
    <div className="min-h-[200px] relative z-[100]">
      <div
        className="min-h-[80%] rounded-b-[20px]"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundColor: "#02476B",
        }}
      ></div>
      <BackButton className="absolute top-[65px] left-10" />
      <div className="absolute bottom-0" style={{ left: "calc(50% - 38px)" }}>
        <CircleAvatar imageUrl={logo} className="object-contain bg-[#FFC081]" />
      </div>
    </div>
  );
}
