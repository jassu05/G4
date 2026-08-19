import React, { useState } from "react";
import "../App.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setMessage("Please enter username and password.");
    } else if (username === "admin" && password === "1234") {
      setLoggedIn(true);
      setMessage("Login successful!");
    } else {
      setMessage("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setMessage("");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {!loggedIn ? (
          <>
            <h2 className="login-title">Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <button onClick={handleLogin} className="login-button">
              Login
            </button>
            {message && <p className="mt-4 text-red-400 text-center">{message}</p>}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-green-500 text-center">Welcome, {username}!</h2>
            <button onClick={handleLogout} className="login-button mt-6">
              Logout
            </button>
            {message && <p className="mt-4 text-green-400 text-center">{message}</p>}
          </>
        )}
      </div>
    </div>
  );
}
