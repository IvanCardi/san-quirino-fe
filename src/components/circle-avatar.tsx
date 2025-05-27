import Image from "next/image";

export default function CircleAvatar({
  imageUrl,
  className,
}: {
  imageUrl: string;
  id?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex-shrink-0 rounded-full bg-white size-[76px] border-[#FFAC2D] border-2 p-1 ${className}`}
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
    >
      {imageUrl && imageUrl !== "" && (
        <Image
          src={imageUrl}
          alt="profile avatar image"
          className={`rounded-full`}
          width={76}
          height={76}
        />
      )}
    </div>
  );
}
