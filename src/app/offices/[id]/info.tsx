export default function Info({
  address,
  name,
  manager,
}: {
  name: string;
  address: string;
  manager: string;
}) {
  return (
    <div className="flex flex-col w-full items-center gap-2">
      <h1 className="text-[19px]/[19px] font-bold">{name}</h1>
      <p className="text-[15px]/[15px] font-extralight max-w-[80%] text-center">{address}</p>
      {manager ? (
        <p className="text-[15px]/[15px]">Titolare: {manager}</p>
      ) : (
        <div className="min-h-[15px]" />
      )}
    </div>
  );
}
