"use client";
import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";

const OrbitingPlanet = () => {
  const [angle, setAngle] = useState(0);

  // Slow down the animation by changing the angle increment
  const speedFactor = 0.1; // Smaller value makes the animation slower
  useAnimationFrame(() => {
    setAngle((prev) => (prev + speedFactor) % 360); // Increment by a smaller amount for slower animation
  });

  const radiusX = 250; // Horizontal radius
  const radiusY = 150; // Vertical radius
  const centerX = 0;
  const centerY = 0;
  const numberOfObjects = 8; // Number of objects orbiting
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
    <div className="relative flex items-center justify-center h-screen bg-white">
      {/* Central Logo */}
      <div className="relative w-1 h-1 bg-black rounded-full flex items-center justify-center shadow-lg z-1">
        <div className="absolute top-[-120px] w-[200px] h-[200px] bg-black rounded-full flex items-center justify-center shadow-lg z-1">
          <span className="text-white font-bold">Logo</span>
        </div>
      </div>

      {/* Orbiting Planets with 3D effect */}
      {orbitingObjects.map((planet, index) => (
        <motion.div
          key={index}
          className="absolute w-10 h-10 bg-blue-500 rounded-full shadow-lg"
          style={{
            x: planet.x,
            y: planet.y,
            scale: planet.scale,
            opacity: planet.opacity,
            zIndex: planet.zIndex,
          }}
        />
      ))}
    </div>
  );
};

export default OrbitingPlanet;
