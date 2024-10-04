import React from "react";
import { NavLink } from "react-router-dom";

// Data navLinks
import { navLinks } from "../api/index";

export default function NavbottomComponent() {
  return (
    <div>
      <div className="element-nav-btm-xy">
        <div className="element-navbar-xy btm-nav py-3 w-full md:w-96 h-20 rounded-3xl">
          <div className="flex justify-between">
            {navLinks.map((navs) => (
              <NavLink to={navs.path} key={navs.id}>
                <div className="icons-navs-liks-ghy flex flex-col items-center content-center">
                  <img
                    src={navs.image}
                    alt=""
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                  <p className="text-xs text-white md:text-sm">{navs.text}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
