"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { HiSun } from "react-icons/hi";
import { BiSolidMoon } from "react-icons/bi";

function Switch() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      className="text-3xl"
      onClick={() =>
        setTheme((p) => {
          if (p === "dark") {
            return "light";
          }
          return "dark";
        })
      }
    >
      {theme === "dark" ? (
        <div className="text-white ">
          <HiSun />
        </div>
      ) : (
        <BiSolidMoon />
      )}
    </button>
  );
}

export default Switch;
