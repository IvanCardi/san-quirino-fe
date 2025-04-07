import { SVGProps } from "react";

const NavbarShape = (
  props: SVGProps<SVGSVGElement> & { className?: string; width: string }
) => (
  <svg
    style={{
      width: "100%" /* Scale the SVG width to 100% of its container */,
      height: "auto" /* Maintain aspect ratio */,
    }}
    viewBox="0 0 375 106"
    width={props.width}
    height="auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <g filter="url(#filter0_d_198_6022)">
      <path
        d="M8.00004 31H144.41C148.665 31 152.089 34.3703 153.144 38.4924C157.119 54.025 170.563 66 187 66C203.619 66 217.178 55.2888 220.984 38.551C221.931 34.387 225.358 31 229.628 31H367C371.418 31 375 34.9797 375 39.8889L375 106H0L3.57628e-05 39.8889C3.57628e-05 34.9797 3.58176 31 8.00004 31Z"
        fill="#171717"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_198_6022"
        x="-30"
        y="0"
        width="435"
        height="135"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-1" />
        <feGaussianBlur stdDeviation="15" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.541176 0 0 0 0 0.584314 0 0 0 0 0.619608 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_198_6022"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_198_6022"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default NavbarShape;
