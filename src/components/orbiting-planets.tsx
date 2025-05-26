"use client";
import { motion, useAnimationFrame } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import logo from "../../public/andromeda-logo.png";
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
  const touchStartX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const speedFactor = 0.3 / planets.length;

  // Auto-rotate the orbit
  useAnimationFrame(() => {
    setAngle((prev) => (prev + speedFactor) % 360);
  });

  // Manual swipe interaction
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartX.current !== null) {
        const currentX = e.touches[0].clientX;
        const deltaX = currentX - touchStartX.current;
        setAngle((prev) => (prev - deltaX * 0.3) % 360); // 👈 Inverted direction
        touchStartX.current = currentX;
      }
    };

    const handleTouchEnd = () => {
      touchStartX.current = null;
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, []);

  const radiusX = 250;
  const radiusY = 150;
  const centerX = 0;
  const centerY = 0;
  const numberOfObjects = planets.length;
  const angleStep = 360 / numberOfObjects;

  const orbitingObjects = Array.from({ length: numberOfObjects }, (_, index) => {
    const objectAngle = angle + index * angleStep;
    const x = parseFloat(
      (centerX + radiusX * Math.cos(objectAngle * (Math.PI / 180))).toFixed(6)
    );
    const y = parseFloat(
      (centerY + radiusY * Math.sin(objectAngle * (Math.PI / 180))).toFixed(6)
    );

    const scale = 1 + (y + radiusY) / (2 * radiusY);
    const opacity = 0.8 + ((y + radiusY) / (2 * radiusY)) * 0.4;
    const zIndex = y > 0 ? 2 : 0;

    return {
      x,
      y,
      scale,
      opacity,
      zIndex,
    };
  });

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center min-h-[400px] bg-transparent overflow-hidden touch-none ${className}`}
    >
      {/* Central Logo */}
      {!hideLogo && <Image src={logo} alt="logo" width={100} height={200} />}

      {/* Orbiting Planets */}
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
