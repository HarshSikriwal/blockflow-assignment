"use client";
import { useState, createContext, use } from "react";

type themeProps = "light" | "dark";

export const ThemeContext = createContext<
  {
    theme: themeProps;
    up: boolean;
    setUp: React.Dispatch<React.SetStateAction<boolean>>;
  } & {
    setTheme: React.Dispatch<React.SetStateAction<themeProps>>;
  }
>({
  theme: "light",
  setTheme: () => null,
  up: false,
  setUp: () => null,
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<themeProps>("light");
  const [up, setUp] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, up, setUp }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
