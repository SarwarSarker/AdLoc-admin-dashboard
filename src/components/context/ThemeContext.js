import { createContext, useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storeProfs = window.localStorage.getItem("color-theme");
    if (typeof storeProfs === "string") {
      return storeProfs;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }
  return "light";
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const checkTheme = (exiting) => {
    const root = window.document.documentElement;
    const isDark = exiting === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(exiting);

    localStorage.setItem("color-theme", exiting);
  };

  if (initialTheme) {
    checkTheme(initialTheme);
  }

  useEffect(() => {
    checkTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
