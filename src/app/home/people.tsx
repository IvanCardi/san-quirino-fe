import CircleAvatar from "@/components/circle-avatar";
import Link from "next/link";

type PeopleProps = {
  people: {
    id: string;
    imageUrl: string;
  }[];
};

export default function People({ people }: PeopleProps) {
  return (
    <div className="pl-8 w-screen min-h-fit py-1 bg-[#0077B64A] rounded-l-full flex flex-nowrap gap-4 overflow-x-auto">
      {people.map((p) => (
        <Link key={p.id} href={`/profile?agentId=${p.id}`}>
          <CircleAvatar {...p} className="min-w-[76px]" />
        </Link>
      ))}
    </div>
  );
}
