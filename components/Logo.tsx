"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import DarkImage from "../public/hero sectn diag.png";

import LightImage from "../public/hero sectn diag (1).png";
import Image from "next/image";
function Logo() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      {theme === "light" ? (
        <Image src={DarkImage} width={390} height={309} alt="Dark image" />
      ) : (
        <Image src={LightImage} width={390} height={309} alt="light image" />
      )}
    </div>
  );
}

export default Logo;
