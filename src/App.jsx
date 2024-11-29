import "./App.css";
import Routing from "./Routing";
import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

export const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function AppMode() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="dark:bg-neutral-500">
        <Routing />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <DarkModeProvider>
      <AppMode />
    </DarkModeProvider>
  );
}
