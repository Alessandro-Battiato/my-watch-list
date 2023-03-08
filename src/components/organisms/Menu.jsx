import React from "react";
import Avatar from "../atoms/Avatar";
import Close from "../atoms/Close";

function Menu({ onToggle }) {
  return (
    <nav className="menu flex flex-col items-center">
      <div className="menu__toggle ml-auto mt-2 mr-2 md:hidden">
        <Close onClick={onToggle} />
      </div>
      <div className="menu__user-info">
        <div className="menu__avatar mt-10">
          <Avatar />
        </div>
        <div className="menu__badge mt-4 flex justify-center">
          <div className="badge badge-accent">Premium</div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
