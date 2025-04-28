"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FallingEmoji({ emoji }: { emoji: string }) {
  const [emojiList, setEmojiList] = useState<
    {
      id: number;
      emoji: string;
      left: number;
    }[]
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEmoji = {
        id: Math.random(),
        emoji: emoji,
        left: Math.random() * 100, // percent
      };
      setEmojiList((prev) => [...prev, newEmoji]);
    }, 0); // every half second

    const timeout = setTimeout(() => {
      clearInterval(interval); // stop after 2 seconds
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {emojiList.map((item) => (
        <motion.div
          key={item.id}
          initial={{ y: -50, opacity: 1 }}
          animate={{ y: "100vh", opacity: 0 }}
          transition={{ duration: 2, ease: "easeIn" }}
          className="absolute text-3xl"
          style={{ left: `${item.left}%` }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </div>
  );
}
