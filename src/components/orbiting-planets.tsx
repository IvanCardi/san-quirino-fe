"use client";
import { motion, useAnimationFrame } from "framer-motion";
import { ReactNode, useState } from "react";
import logo from "../..//public/andromeda-logo.png";
import Image from "next/image";

export default function OrbitingPlanets<T>({
  planets,
  className,
  hideLogo = false,
  PlanetRender,
}: {
  planets: T[];
  className?: string;
  hideLogo?: boolean;
  PlanetRender: (props: { planet: T }) => ReactNode;
}) {
  const [angle, setAngle] = useState(0);

  // Slow down the animation by changing the angle increment
  const speedFactor = 0.3 / planets.length; // Smaller value makes the animation slower

  useAnimationFrame(() => {
    setAngle((prev) => (prev + speedFactor) % 360); // Increment by a smaller amount for slower animation
  });

  const radiusX = 250; // Horizontal radius
  const radiusY = 150; // Vertical radius
  const centerX = 0;
  const centerY = 0;
  const numberOfObjects = planets.length; // Number of objects orbiting
  const angleStep = 360 / numberOfObjects; // Angle difference between objects

  const orbitingObjects = Array.from(
    { length: numberOfObjects },
    (_, index) => {
      // Calculate angle for each object, spaced evenly
      const objectAngle = angle + index * angleStep;

      // Calculate X, Y positions for each object
      const x = parseFloat(
        (centerX + radiusX * Math.cos(objectAngle * (Math.PI / 180))).toFixed(6)
      );
      const y = parseFloat(
        (centerY + radiusY * Math.sin(objectAngle * (Math.PI / 180))).toFixed(6)
      );

      // Depth effect: Scale & opacity based on Y position
      const scale = 1 + (y + radiusY) / (2 * radiusY); // Smaller when at the top
      const opacity = 0.8 + ((y + radiusY) / (2 * radiusY)) * 0.4; // More transparent when at the top
      const zIndex = y > 0 ? 2 : 0; // In front when at bottom, behind when at top

      return {
        x,
        y,
        scale,
        opacity,
        zIndex,
      };
    }
  );

  return (
    <div
      className={`relative flex items-center justify-center h-[400px] bg-transparent overflow-hidden ${className}`}
    >
      {/* Central Logo */}
      {!hideLogo && <Image src={logo} alt="logo" width={100} height={200} />}

      {/* Orbiting Planets with 3D effect */}
      {orbitingObjects.map((planet, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full z-50"
          style={{
            x: planet.x,
            y: planet.y,
            opacity: planet.opacity,
            zIndex: planet.zIndex,
            boxShadow: "0px 3.43px 3.43px 0px #00000040",
            scale: planet.scale,
          }}
        >
          <PlanetRender planet={planets[index]} />
        </motion.div>
      ))}
    </div>
  );
}
