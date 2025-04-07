type PeopleProps = {
  people: {
    id: string;
    imageUrl: string;
  }[];
};

export default function People({ people }: PeopleProps) {
  return (
    <div className="pl-8 w-screen h-fit py-1 bg-[#0077B64A] rounded-l-full flex flex-nowrap gap-4 overflow-x-auto">
      {people.map((p) => (
        <PersonAvatar key={p.id} {...p} />
      ))}
    </div>
  );
}

function PersonAvatar({ id, imageUrl }: { imageUrl: string; id: string }) {
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
