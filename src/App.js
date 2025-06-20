import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Payout from "./pages/Payout";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user } = useAuth();

  if (!user) {
    // If not logged in, show Login page
    return (
      <Routes>
        <Route path="/*" element={<Login />} />
      </Routes>
    );
  }

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 md:ml-60">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/payout"
              element={user.isAdmin ? <Payout /> : <Navigate to="/dashboard" />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
