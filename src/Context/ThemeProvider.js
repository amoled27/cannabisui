import React, { useContext, useState } from "react";
import { createContext } from "react";
import { theme } from "../Themes/default";


const ThemeContext = createContext(theme);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
}

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={ theme }>
      {children}
    </ThemeContext.Provider>
  );
};
