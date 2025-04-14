export default function Info({
  address,
  name,
  admin,
}: {
  name: string;
  address: string;
  admin: string;
}) {
  return (
    <div className="flex flex-col m-auto w-fit items-center gap-2">
      <h1 className="text-[19px]/[19px] font-bold">{name}</h1>
      <p className="text-[15px]/[15px] font-extralight">{address}</p>
      <p className="text-[15px]/[15px]">Titolare: {admin}</p>
    </div>
  );
}
