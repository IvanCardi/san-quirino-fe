export default function PersonAvatar({
  imageUrl,
}: {
  imageUrl: string;
  id: string;
}) {
  return (
    <div className="flex-shrink-0 size-[76px]">
      <img
        src={imageUrl}
        alt="profile avatar image rounded-full"
        className="rounded-full border-4 border-white"
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      />
    </div>
  );
}
