"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import LightLogo from "../public/light mode logo.png";
import DarkLogo from "../public/dark mode logo.png";
import Image from "next/image";

function BrandName() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex items-center text-2xl">
      {theme === "light" ? (
        <>
          <Image src={LightLogo} alt="light logo" width={44} height={42} />
          <h1 className="text-[#333333]">blockflow</h1>
        </>
      ) : (
        <>
          <Image src={DarkLogo} alt="Dark logo" width={44} height={42} />
          <h1 className="text-white">blockflow</h1>
        </>
      )}
    </div>
  );
}

export default BrandName;
