export default function Info({
  address,
  fullName,
  office,
}: {
  fullName: string;
  office: string;
  address: string;
}) {
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-[19px] font-bold">{fullName}</h1>
      <p className="text-[15px] font-extralight">{office}</p>
      <p className="text-[15px] font-extralight max-w-[80%] text-center">{address}</p>
    </div>
  );
}
