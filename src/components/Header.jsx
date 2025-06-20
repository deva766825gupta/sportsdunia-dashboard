import React from "react";
import { useAuth } from "../context/AuthContext";

const Header = () => {
const { user, logout } = useAuth();

return (
<header className="bg-white shadow px-4 py-3 flex justify-between items-center sticky top-0 z-10 md:ml-60">
<h2 className="text-xl font-semibold">Welcome, {user?.email}</h2>
<button onClick={logout} className="bg-red-500 px-4 py-2 rounded text-white">
Logout
</button>
</header>
);
};

export default Header;