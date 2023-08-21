import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { motion, useMotionValue, Variants } from "framer-motion";

function Circle() {
  const { theme, up, setUp } = useContext(ThemeContext);

  const y = useMotionValue("-130%");
  useEffect(() => {
    y.on("change", () => {
      if (y.get() === "-83%") setUp(true);
      if (y.get() === "40%") setUp(false);
    });
  }, [y]);

  const gradient = {
    light: {
      y: "40%",
    },
    dark: {
      // ,
      y: "-83%",
    },
  };
  return (
    <motion.div
      initial={{
        position: "fixed",
        y: "-82%",
      }}
      id="circle"
      animate={theme === "light" ? "light" : "dark"}
      variants={gradient}
      style={{ y }}
      transition={{ duration: 0.5 }}
      className={`rounded-full h-[1100px] w-[1100px] ${
        theme === "light" ? "lightCircle" : "darkCircle"
      } ${up && theme === "dark" ? "z-0" : "z-20"}`}
    ></motion.div>
  );
}

export default Circle;
