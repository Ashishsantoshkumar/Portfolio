/* eslint-disable react-refresh/only-export-components */
import React from "react";

const ThemeContext = React.createContext({
  theme: "light",
  setTheme: () => {},
});

export function ThemeProvider({ defaultTheme = "light", children }) {
  const [theme, setTheme] = React.useState(defaultTheme);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}

