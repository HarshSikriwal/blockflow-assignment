"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Texts() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-col w-[768px] h-[343px] gap-11 ${
        theme === "light" ? "text-[#444444]" : "text-white"
      }`}
    >
      <p className="text-[70px] leading-[84px]">
        ELEVATE YOUR DAPP DEVELOPMENT WITH BLOCKFLOW
      </p>
      <p className="w-[335px] h-[47px] text-2xl leading-6">
        Efficient API Creation for your Blokchain Data Needs.
      </p>
    </div>
  );
}

export default Texts;
