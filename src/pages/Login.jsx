import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <h1 className="text-4xl font-bold mb-6">Sports Dunia Assignment</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-700">Login</h2>

        <div>
          <label className="block mb-2 text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-gray-500 text-sm">
          Admin: <strong>admin@sportsdunia.com / admin</strong><br />
          Other users can login with any email/password.
        </p>
      </form>
    </div>
  );
};

export default Login;
