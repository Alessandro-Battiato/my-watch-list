import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "../atoms/Hamburger";

function Header({ onToggleMenu, onLogout }) {
  return (
    <header className="header bg-gray-800 dark">
      <div className="header__content p-4 flex justify-between items-center">
        <div className="md:hidden">
          <Hamburger onClick={onToggleMenu} />
        </div>
        <div className="header__logo">
          <Link to="/" className="text-xl text-accent">
            MyWatchList
          </Link>
        </div>
        <div className="header__btn btn btn-outline btn-accent">
          <button onClick={onLogout}>Logout</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
