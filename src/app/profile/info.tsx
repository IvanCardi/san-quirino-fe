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
    <div className="flex flex-col m-auto w-fit items-center">
      <h1 className="text-[19px] font-bold">{fullName}</h1>
      <p className="text-[15px] font-extralight">{office}</p>
      <p className="text-[15px] font-extralight">{address}</p>
    </div>
  );
}
