import { SVGProps } from "react";

const ArrowLeft = (props: SVGProps<SVGSVGElement> & { className?: string }) => (
  <svg
    width="14"
    height="12"
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.2969 4.96875H4.1875L7 2.10938C7.42187 1.6875 7.42187 1.03125 7 0.609375C6.57812 0.1875 5.92187 0.1875 5.5 0.609375L0.953125 5.25C0.53125 5.67188 0.53125 6.32812 0.953125 6.75L5.5 11.3906C5.6875 11.5781 5.96875 11.7188 6.25 11.7188C6.53125 11.7188 6.76562 11.625 7 11.4375C7.42187 11.0156 7.42187 10.3594 7 9.9375L4.1875 7.07812H12.2969C12.8594 7.07812 13.3281 6.60937 13.3281 6.04687C13.375 5.4375 12.9062 4.96875 12.2969 4.96875Z"
      fill="white"
      className={props.className}
    />
  </svg>
);

export default ArrowLeft;
