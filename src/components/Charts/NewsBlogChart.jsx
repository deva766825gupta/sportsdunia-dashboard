import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#8884d8", "#82ca9d"];

const NewsBlogChart = ({ articles }) => {
  const newsCount = articles.filter(item => item.type === "news").length;
  const blogCount = articles.filter(item => item.type === "blog").length;

  const data = [
    { name: "News", value: newsCount },
    { name: "Blog", value: blogCount },
  ];

  return (
    <div className="w-full h-80 bg-white rounded p-4 shadow">
      <h2 className="text-xl font-bold mb-4">News vs Blog Distribution</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NewsBlogChart;
