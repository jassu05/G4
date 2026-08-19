import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-black">
      <Navbar setPage={setPage} />
      <div className="mt-16">
        {page === "home" && <Home />}
        {page === "login" && <Login />}
      </div>
    </div>
  );
}
