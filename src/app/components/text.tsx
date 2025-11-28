"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollTextReveal({ text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere atque provident, suscipit officia earum qui veritatis similique assumenda incidunt iste quibusdam aliquid eveniet ipsa sunt eos numquam reiciendis! Accusamus, illum." }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // reveal while passing viewport
  });

  // 👉 0% reveal → 100% reveal
  const clipPath = useTransform(scrollYProgress, (v: number) => {
    const percent = v * 100;
    // Hides white text completely at start
    return `inset(0 ${100 - percent}% 0 0)`;
  });

  return (
    <div className="w-full py-40 flex justify-center">
      <div ref={ref} className="relative inline-block">

        {/* GRAY TEXT (always visible) */}
        <h1 className="text-6xl font-bold text-gray-400 select-none">
          {text}
        </h1>

        {/* WHITE REVEAL TEXT (hidden → revealed on scroll) */}
        <motion.h1
          className="text-6xl font-bold text-white absolute top-0 left-0 select-none"
          style={{ clipPath }}
        >
          {text}
        </motion.h1>
      </div>
    </div>
  );
}
