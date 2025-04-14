import "./animated-gradient.css"; // Make sure the path is correct

export default function AnimatedGradient({
  className,
  style,
}: {
  className: string;
  style: object;
}) {
  return (
    <div
      className={`w-full animated-gradient flex items-center justify-center ${className}`}
      style={style}
    ></div>
  );
}
