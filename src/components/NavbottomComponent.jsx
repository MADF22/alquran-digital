import React from "react";
import { NavLink } from "react-router-dom";

// Data navLinks
import { navLinks } from "../api/index";

export default function NavbottomComponent() {
  return (
    <div>
      <div className="element-nav-btm-xy">
        <div className="element-navbar-xy btm-nav py-3 w-96 h-20 rounded-3xl">
          {navLinks.map((navs) => (
            <div className="flex justify-between" key={navs.id}>
              <NavLink to={navs.path}>
                <div className="icons-navs-liks-ghy flex flex-col items-center content-center">
                  <img src={navs.image} alt="" />
                  <p className="text-xs text-white">{navs.text}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
