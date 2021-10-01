import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <i
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="fas fa-sun text-gray-500 dark:text-gray-400 text-xl cursor-pointer"
        ></i>
      ) : (
        <i
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="fas fa-moon text-gray-500 dark:text-gray-400 text-xl cursor-pointer"
        ></i>
      )}
    </div>
  );
};

export default ThemeToggler;
