import React, { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import { useAuth } from "../context/AuthContext";

const Payout = () => {
  const { articles } = useApp();
  const { user } = useAuth();

  const [payoutRate, setPayoutRate] = useState(() => {
    return localStorage.getItem("payoutRate")
      ? parseFloat(localStorage.getItem("payoutRate"))
      : 10; // default ₹10 per article
  });

  const [authorPayouts, setAuthorPayouts] = useState([]);

  useEffect(() => {
    const map = new Map();
    articles.forEach((item) => {
      const author = item.author || "Unknown";
      map.set(author, (map.get(author) || 0) + 1);
    });

    const data = Array.from(map.entries()).map(([author, count]) => ({
      author,
      count,
      total: count * payoutRate,
    }));

    setAuthorPayouts(data);
  }, [articles, payoutRate]);

  const handleRateChange = (e) => {
    const value = parseFloat(e.target.value);
    setPayoutRate(value);
    localStorage.setItem("payoutRate", value);
  };

  if (!user?.isAdmin) {
    return <div className="p-4 text-red-600">Access Denied: Admins Only</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Payout Calculator</h2>

      <div className="mb-4">
        <label className="mr-2 font-medium">Payout per article (₹):</label>
        <input
          type="number"
          value={payoutRate}
          onChange={handleRateChange}
          className="border p-2 rounded w-24"
        />
      </div>

      <table className="w-full table-auto border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Author</th>
            <th className="border px-4 py-2">Articles</th>
            <th className="border px-4 py-2">Total Payout (₹)</th>
          </tr>
        </thead>
        <tbody>
          {authorPayouts.map((entry) => (
            <tr key={entry.author}>
              <td className="border px-4 py-2">{entry.author}</td>
              <td className="border px-4 py-2 text-center">{entry.count}</td>
              <td className="border px-4 py-2 text-center">{entry.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payout;
