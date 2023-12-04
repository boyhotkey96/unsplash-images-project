import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

AppProvider.propTypes = {
  children: PropTypes.any,
};

const AppContext = createContext();

function AppProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // body: toggle background dark mode
  if (isDarkMode) {
    document.body.style.backgroundColor = "#333333";
  } else {
    document.body.style.backgroundColor = "#f0f0f0";
  }

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
