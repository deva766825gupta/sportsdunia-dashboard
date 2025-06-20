import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);


 const NEWS_URL = `/api/news`;

  useEffect(() => {
    fetchArticles();
  }, []);

const fetchArticles = async () => {
  try {
    setLoading(true);
    const res = await axios.get(NEWS_URL);

    // ⬇️ Update this part
    const data = res.data.articles.map((item, index) => ({
      id: index + 1,
      author: item.author || "Unknown",
      title: item.title,
      publishedAt: item.publishedAt,
      // ✅ Simulate blogs here
      type: index % 2 === 0 ? "news" : "blog", // Even index → news, Odd index → blog
    }));

    setArticles(data);
    setLoading(false);
  } catch (err) {
    console.error("API fetch error:", err.message);
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
