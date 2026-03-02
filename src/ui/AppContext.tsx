import { createContext, ReactNode, useEffect, useState } from "react";

interface AppContextValues {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValues: AppContextValues = {
  isDarkMode: false,
  setIsDarkMode: () => {},
};

export const AppContext = createContext(defaultValues);

export default function AppContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const getInitialTheme = (): boolean => {
    if (typeof window === "undefined") return false;

    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") return true;
    if (storedTheme === "light") return false;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <AppContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </AppContext.Provider>
  );
}
