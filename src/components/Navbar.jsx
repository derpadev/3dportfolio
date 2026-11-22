import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/portfolio"
        className="border w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">DH</p>
      </NavLink>
      <nav className="flex items-center gap-4 text-sm font-medium text-slate-700">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600"
              : "hover:text-blue-500 transition-colors"
          }
        >
          Scene
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600"
              : "hover:text-blue-500 transition-colors"
          }
        >
          Portfolio
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
