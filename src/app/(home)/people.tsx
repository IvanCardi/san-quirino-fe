import CircleAvatar from "@/components/circle-avatar";

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
        <CircleAvatar key={p.id} {...p} />
      ))}
    </div>
  );
}
