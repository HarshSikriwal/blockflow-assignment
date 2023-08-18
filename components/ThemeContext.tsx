"use client";
import { useState, createContext } from "react";

type themeProps = "light" | "dark";

export const ThemeContext = createContext<
  { theme: themeProps } & {
    setTheme: React.Dispatch<React.SetStateAction<themeProps>>;
  }
>({
  theme: "light",
  setTheme: () => null,
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<themeProps>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
