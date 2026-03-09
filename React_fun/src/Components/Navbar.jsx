import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-indigo-400">
            MyApp
          </h1>

          {/* Menu */}
          <ul className="flex space-x-8 text-lg">
            
            <li>
              <NavLink to="/APICalling" className="hover:text-indigo-400 transition duration-300">
                APICalling
              </NavLink>
            </li>

            <li>
              <NavLink to="/FormHandling" className="hover:text-indigo-400 transition duration-300">
                FormHandling
              </NavLink>
            </li>

            <li>
              <NavLink to="/LocalStorage" className="hover:text-indigo-400 transition duration-300">
                LocalStorage
              </NavLink>
            </li>

            <li>
              <NavLink to="/UseEffect" className="hover:text-indigo-400 transition duration-300">
                UseEffect
              </NavLink>
            </li>

            <li>
              <NavLink to="/UseState" className="hover:text-indigo-400 transition duration-300">
                UseState
              </NavLink>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;