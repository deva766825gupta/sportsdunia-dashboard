import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
return (
<aside className="bg-blue-900 text-white w-full md:w-60 h-auto md:h-screen p-4 md:fixed top-0 left-0">
<h1 className="text-2xl font-bold mb-6">Sportsdunia Frontend Developer Assessment</h1>
<nav className="space-y-4">
<Link to="/dashboard" className="block hover:text-blue-200">Dashboard</Link>
<Link to="/payout" className="block hover:text-blue-200">Payout</Link>
</nav>
</aside>
);
};

export default Sidebar;