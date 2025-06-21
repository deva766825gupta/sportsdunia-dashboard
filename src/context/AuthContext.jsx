import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]); // All registered users
  const [loginActivities, setLoginActivities] = useState([]); // Login history

  const login = (email, password) => {
    let isAdmin = false;

    if (email === "admin@gmail.com" && password === "123") {
      isAdmin = true;
    }

    // Check if user already exists
    let existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      existingUser.loginCount += 1;
    } else {
      existingUser = { email, isAdmin, loginCount: 1, downloads: [] };
      setUsers((prev) => [...prev, existingUser]);
    }

    // Save login activity
    setLoginActivities((prev) => [
      ...prev,
      { email, time: new Date().toLocaleString() },
    ]);

    setUser(existingUser);
  };

  const logout = () => setUser(null);

  const recordDownload = (email, articleTitle) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.email === email ? { ...u, downloads: [...u.downloads, articleTitle] } : u
      )
    );
  };

  return (
    <AuthContext.Provider
      value={{ user, users, login, logout, loginActivities, recordDownload }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
