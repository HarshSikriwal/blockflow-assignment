"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Button() {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={`w-[225px] h-[64px] rounded-full ${
        theme === "light"
          ? "bg-[#A9C2E8] text-[#333333] lightBoxShadow"
          : "bg-[#8075FF] text-black darkBoxShadow"
      }`}
    >
      Request Demo
    </button>
  );
}

export default Button;
