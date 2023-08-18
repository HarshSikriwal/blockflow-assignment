"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Link from "next/link";

function Routes() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
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
