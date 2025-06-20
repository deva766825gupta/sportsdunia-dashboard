import React, { useState } from "react";
import NewsBlogChart from "../components/Charts/NewsBlogChart";
import { useApp } from "../context/AppContext";
import FilterBar from "../components/FilterBar";
import ArticleCard from "../components/ArticleCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { exportToPDF, exportToCSV } from "../utils/exportUtils"; // 📤 Add this

const Dashboard = () => {
  const { articles, loading } = useApp();
  const [filtered, setFiltered] = useState([]);

  const articleList = filtered.length > 0 ? filtered : articles;

  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6">
      {/* 🔍 Filter Bar */}
      <FilterBar articles={articles} setFiltered={setFiltered} />

      {/* 📊 Chart */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">News vs Blogs</h2>
        <NewsBlogChart articles={articleList} />
      </div>

      {/* 📤 Export Buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => exportToPDF(articleList)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Export to PDF
        </button>
        <button
          onClick={() => exportToCSV(articleList)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Export to Excel
        </button>
      </div>

      {/* 📦 Article Count */}
      <div className="bg-white p-4 rounded-xl shadow text-lg font-medium">
        Total Articles: <span className="font-bold">{articleList.length}</span>
      </div>

      {/* 📰 Article Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articleList.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
