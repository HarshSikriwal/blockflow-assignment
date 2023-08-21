import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { motion, useMotionValue, Variants } from "framer-motion";

function Circle() {
  const { theme, up, setUp } = useContext(ThemeContext);

  const y = useMotionValue("-130%");
  useEffect(() => {
    y.on("change", () => {
      if (y.get() === "-130%") setUp(true);
      if (y.get() === "70%") setUp(false);
    });
  }, []);
  const ball: Variants = {
    light: { y: "70%" },
    dark: {
      y: "-130%",
    },
  };
  const gradient = {
    light: {
      background:
        "linear-gradient(180deg, #FFD700 0%, 22%, rgba(255, 255, 255, 1.00) 100%)",
      boxShadow:
        "0px -50px 100px 0px rgba(255, 234, 128, 0.50), -10px 0px 20px 0px rgba(255, 234, 128, 0.50), 10px 0px 20px 0px rgba(255, 234, 128, 0.50)",
    },
    dark: {
      background: "linear-gradient(180deg, #22336D 0%, rgb(25, 35, 73) 100%)",
      //   position: "absolute",
    },
  };
  return (
    <motion.div
      className="flex justify-center h-screen w-screen "
      initial={{
        y: "-130%",
        position: "fixed",
      }}
      style={{ y }}
      animate={theme === "light" ? "light" : "dark"}
      variants={ball}
      transition={{ duration: 0.5 }}
    >
      {/* <div className="bg-white rounded-full h-[1100px] w-[1100px] -z-50 flex justify-center"> */}
      <motion.div
        initial={{
          background: "linear-gradient(180deg, #feda1a 0%, #feda1a 100%)",
        }}
        animate={theme === "light" ? "light" : "dark"}
        variants={gradient}
        transition={{ duration: 0.1 }}
        className={`rounded-full h-[1100px] w-[1100px] ${
          up ? "-z-[1000]" : "z-[1000]"
        }`}
      ></motion.div>
      {/* </div> */}
    </motion.div>
  );
}

export default Circle;
