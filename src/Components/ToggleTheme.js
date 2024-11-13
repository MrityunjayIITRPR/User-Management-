import React, { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";

const ToggleTheme = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const handleClick = (event) => {
    setDarkTheme(!darkTheme);
  };
  return (
    <div>
      <button
        className="mr-4 my-2 p-2 bg-slate-400 rounded-lg text-black text-2xl border border-black shadow-md"
        onClick={handleClick}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ToggleTheme;
