"use client";
import BackButton from "@/components/back-button";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { motion } from "framer-motion";

export default function Success() {
  const { width, height } = useWindowSize();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-screen gap-6"
    >
      <div className="h-full w-full flex items-center justify-center">
        <BackButton
          className="absolute left-[30px] top-[55px]"
          variant="blue"
        />
        <p className="font-extrabold text-[32px] w-fit text-center">
          STAI SPACCANDO
          <br />
          CONTINUA COSÌ!
        </p>
        <Confetti width={width} height={height - 76} recycle={false} />
      </div>
    </motion.div>
  );
}
