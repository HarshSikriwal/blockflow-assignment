"use client";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

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
      {children}
    </div>
  );
}

export default Background;
