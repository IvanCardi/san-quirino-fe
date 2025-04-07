import { SVGProps } from "react";

const Lightning = (props: SVGProps<SVGSVGElement> & { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.25 11.4583H14.2708L19.375 1.79163C19.5417 1.37496 19.3542 1.04163 18.9583 1.04163H11.2292C10.8125 1.04163 10.3333 1.37496 10.1667 1.79163L6.33333 10.7083C6.14583 11.125 6.33333 11.4583 6.75 11.4583H10.4167L6.39583 22.9166C6.125 23.6875 6.33333 24.3333 7.29167 23.4791L18.2917 12.5833C18.9167 11.9791 18.8958 11.4583 18.25 11.4583Z"
      stroke="#E0FAFF"
      className={props.className}
    />
  </svg>
);

export default Lightning;
