"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Link from "next/link";
import { motion } from "framer-motion";

function Routes() {
  const { theme, up } = useContext(ThemeContext);
  const zVar = {
    light: { "z-index": "0" },
    dark: { "z-index": "30" },
  };
  return (
    <div
      // animate={theme === "light" ? "light" : "dark"}
      // variants={zVar as any}
      // transition={{ duration: 0.1, delay: 0.55 }}
      className={`flex gap-12 ${
        theme === "light" ? "text-[#444444]" : "text-white"
      }  `}
    >
      <button>DOCS</button>
      <button>BLOG</button>
      <button>PRICING</button>
      <button>CONTACT US</button>
    </div>
  );
}

export default Routes;
