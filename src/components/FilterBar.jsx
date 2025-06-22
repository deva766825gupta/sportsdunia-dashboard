import React, { useState, useEffect } from "react";

const FilterBar = ({ articles, setFiltered }) => {
  const [selectedTitle, setSelectedTitle] = useState("All");
  const [selectedAuthor, setSelectedAuthor] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Get unique titles and authors
  const titles = ["All", ...new Set(articles.map((article) => article.title))];
  const authors = ["All", ...new Set(articles.map((article) => article.author))];
  const types = ["All", "news", "blog"];

  useEffect(() => {
    let result = articles;

    if (selectedTitle !== "All") {
      result = result.filter((article) => article.title === selectedTitle);
    }

    if (selectedAuthor !== "All") {
      result = result.filter((article) => article.author === selectedAuthor);
    }

    if (selectedType !== "All") {
      result = result.filter((article) => article.type === selectedType);
    }

    if (startDate) {
      result = result.filter((article) => new Date(article.publishedAt) >= new Date(startDate));
    }

    if (endDate) {
      result = result.filter((article) => new Date(article.publishedAt) <= new Date(endDate));
    }

    setFiltered(result);
  }, [selectedTitle, selectedAuthor, selectedType, startDate, endDate, articles, setFiltered]);

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      {/* 🔽 Title Dropdown */}
      <select
        value={selectedTitle}
        onChange={(e) => setSelectedTitle(e.target.value)}
        className="border px-3 py-2 rounded"
      >
        {titles.map((title, idx) => (
          <option key={idx} value={title}>
            {title}
          </option>
        ))}
      </select>

      {/* 🔽 Author Dropdown */}
      <select
        value={selectedAuthor}
        onChange={(e) => setSelectedAuthor(e.target.value)}
        className="border px-3 py-2 rounded"
      >
        {authors.map((author, idx) => (
          <option key={idx} value={author}>
            {author}
          </option>
        ))}
      </select>

      {/* 🔽 Type Dropdown */}
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="border px-3 py-2 rounded"
      >
        {types.map((type, idx) => (
          <option key={idx} value={type}>
            {type === "All" ? "All Types" : type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>

      {/* 📅 Start Date */}
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="border px-3 py-2 rounded"
      />

      {/* 📅 End Date */}
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="border px-3 py-2 rounded"
      />
    </div>
  );
};

export default FilterBar;
