import { SVGProps } from "react";

const Profile = (props: SVGProps<SVGSVGElement> & { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9848 15.3462C8.11719 15.3462 4.81433 15.931 4.81433 18.2729C4.81433 20.6148 8.09624 21.2205 11.9848 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8734 15.3462 11.9848 15.3462Z"
      fill="url(#paint0_linear_198_5596)"
      stroke="url(#paint1_linear_198_5596)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94779 16.58 7.40969C16.58 4.8716 14.5229 2.81445 11.9848 2.81445C9.44667 2.81445 7.38858 4.8716 7.38858 7.40969C7.38001 9.93922 9.42382 11.9973 11.9524 12.0059H11.9848Z"
      fill="url(#paint2_linear_198_5596)"
      stroke="url(#paint3_linear_198_5596)"
      strokeWidth="1.42857"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_198_5596"
        x1="11.9843"
        y1="15.3462"
        x2="11.9843"
        y2="21.2205"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6EB5D2" />
        <stop offset="0.655" stopColor="#E0FAFF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_198_5596"
        x1="11.9843"
        y1="15.3462"
        x2="11.9843"
        y2="21.2205"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6EB5D2" />
        <stop offset="0.655" stopColor="#E0FAFF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_198_5596"
        x1="11.9843"
        y1="2.81445"
        x2="11.9843"
        y2="12.0059"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6EB5D2" />
        <stop offset="0.655" stopColor="#E0FAFF" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_198_5596"
        x1="11.9843"
        y1="2.81445"
        x2="11.9843"
        y2="12.0059"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6EB5D2" />
        <stop offset="0.655" stopColor="#E0FAFF" />
      </linearGradient>
    </defs>
  </svg>
);

export default Profile;
