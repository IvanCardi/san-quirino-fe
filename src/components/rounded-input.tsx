export default function RoundedInput(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <input
      {...props}
      className="border-[3px] w-full rounded-full pl-6 py-[6px] border-[#053575] focus-visible:ring-0 focus-visible:outline-0"
      style={{
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    />
  );
}
