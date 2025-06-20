import React, { useState, useEffect } from "react";

const FilterBar = ({ articles, setFiltered }) => {
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    let filtered = articles;

    // Filter by author
    if (author) {
      filtered = filtered.filter((item) =>
        item.author.toLowerCase().includes(author.toLowerCase())
      );
    }


    if (type) {
      filtered = filtered.filter((item) => item.type === type);
    }

  
    if (startDate && endDate) {
      filtered = filtered.filter((item) => {
        const date = new Date(item.publishedAt);
        return date >= new Date(startDate) && date <= new Date(endDate);
      });
    }

   
    if (search) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(filtered);
  }, [author, type, search, startDate, endDate, articles, setFiltered]);

  return (
    <div className="mb-4 bg-white p-4 rounded shadow space-y-2 md:space-y-0 md:space-x-4 md:flex items-center justify-between">
      <input
        type="text"
        placeholder="Search Title from  Articles "
        className="border p-2 rounded w-full md:w-auto"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        className="border p-2 rounded w-full md:w-auto"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 rounded w-full md:w-auto"
      >
        <option value="">All Types</option>
        <option value="news">News</option>
        <option value="blog">Blog</option>
      </select>
      <div className="flex space-x-2">
        <input
          type="date"
          className="border p-2 rounded"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          className="border p-2 rounded"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterBar;
