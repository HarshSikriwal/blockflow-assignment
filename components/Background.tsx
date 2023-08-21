"use client";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Circle from "./Circle";

function Background({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full h-screen ${
        theme === "light"
          ? `bg-gradient-to-r from-[#E8F0FD] to-[#ffffff]`
          : "bg-gradient-to-r from-[#1F284A] to-[#070B17]"
      }`}
    >
      <Circle />
      {children}
    </div>
  );
}

export default Background;
