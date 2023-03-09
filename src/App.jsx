import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/organisms/Header";
import Menu from "./components/organisms/Menu";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("user", null);
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (localStorage.getItem("user") !== "test") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="app h-screen flex flex-col bg-gray-900 dark overflow-y-auto">
      <div className="app__header">
        <Header onToggleMenu={toggleMenu} onLogout={handleLogout} />
      </div>
      <div className="app__content flex-1 md:flex">
        <aside
          className={`fixed inset-0 z-10 md:static md:transform-none md:flex-[2] bg-gray-500 transition-transform duration-500 ${
            !menuOpen ? "-translate-y-full" : ""
          }`}
        >
          <Menu onToggle={toggleMenu} />
        </aside>
        <main className="md:flex-[6] overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
