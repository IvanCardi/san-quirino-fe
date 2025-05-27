import Link from "next/link";

type PeopleProps = {
  people: {
    id: string;
    imageUrl: string;
    nickname: string;
  }[];
};

export default function People({ people }: PeopleProps) {
  return (
    <div className="pl-8 w-screen pt-2.5 pb-1 bg-[#0077B64A] rounded-l-full flex flex-nowrap gap-4 overflow-x-auto min-h-[112px]">
      {people.map((p) => (
        <Link
          key={p.id}
          href={`/profile?agentId=${p.id}`}
          className="flex flex-col items-center gap-1"
        >
          <CircleAvatar {...p} />
          <p className="font-light text-[12px] text-ellipsis overflow-hidden whitespace-nowrap max-w-[76px]">
            {p.nickname}
          </p>
        </Link>
      ))}
    </div>
  );
}

export function CircleAvatar({ imageUrl }: { imageUrl: string; id?: string }) {
  return (
    <div
      className="flex-shrink-0 rounded-full bg-white border-2 border-[#FFAC2D] p-1 size-[76px] relative"
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
    >
      <img
        src={imageUrl}
        alt="profile avatar image"
        className="absolute size-[70px] right-0 top-[-7px]"
      />
    </div>
  );
}
