import React from "react";
import "../App.css";

export default function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("login")}>Login</button>
    </nav>
  );
}
