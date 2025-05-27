export default function CircleAvatar({
  imageUrl,
  className,
}: {
  imageUrl: string;
  id?: string;
  className?: string;
}) {
  return (
    <div className="flex-shrink-0 rounded-full bg-white size-[76px]">
      {imageUrl && imageUrl !== "" && (
        <img
          src={imageUrl}
          alt="profile avatar image"
          className={`rounded-full border-2 border-[#FFAC2D] p-1 size-[76px] ${className}`}
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        />
      )}
    </div>
  );
}
