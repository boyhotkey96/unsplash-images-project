import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

AppProvider.propTypes = {
  children: PropTypes.any,
};

const AppContext = createContext();

// Dark Mode: check browser is dark
const checkDarkModeBrowser = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return true;
  } else {
    return false;
  }
};

// Dark Mode: check local storage is dark
const checkDarkModeStorage = () => {
  return JSON.parse(localStorage.getItem("dark-mode"));
};

function AppProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return checkDarkModeStorage() ?? checkDarkModeBrowser();
  });

  const toggleDarkMode = () => {
    const isNewDarkMode = !isDarkMode;
    localStorage.setItem("dark-mode", isNewDarkMode);
    setIsDarkMode(isNewDarkMode);
  };

  // body: toggle background dark mode
  /* if (isDarkMode) {
    document.body.style.backgroundColor = "#333333";
  } else {
    document.body.style.backgroundColor = "#f0f0f0";
  } */
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <AppContext.Provider
      value={{ isDarkMode, toggleDarkMode, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

export const useGlobalContext = () => useContext(AppContext);
