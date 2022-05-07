import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const [input, setInput] = useState("a");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${url}${input}`);
      const data = await res.json();
      const cocktails = data.drinks;
      if (cocktails) {
        setDrinks(cocktails);
      } else {
        setDrinks([]);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error.res);
    }
  };

  useEffect(() => {
    fetchData();
  }, [input]);

  return (
    <AppContext.Provider value={{ isLoading, drinks, setInput, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
