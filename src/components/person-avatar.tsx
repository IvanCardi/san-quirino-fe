export default function PersonAvatar({
  imageUrl,
  className,
}: {
  imageUrl: string;
  id: string;
  className?: string;
}) {
  return (
    <div className="flex-shrink-0 ">
      <img
        src={imageUrl}
        alt="profile avatar image rounded-full"
        className={`rounded-full border-4 border-white size-[76px] ${className}`}
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      />
    </div>
  );
}
