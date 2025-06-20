import React, { createContext, useContext, useEffect, useState } from "react";
import dummyArticles from "../data/articles";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);

      setTimeout(() => {
        setArticles(dummyArticles);
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.error("Error loading articles:", err.message);
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider value={{ articles, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
