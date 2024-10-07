import React from "react";
import { NavLink } from "react-router-dom";
//Pemanggilan API Content
import { contentMenu } from "../api/index";

export default function ContentComponents() {
  return (
    <div>
      <div className="element-content-art-fp w-80">
        <div className="element-card-fyp-x flex justify-center py- sm:py-2">
          {contentMenu.map((menu) => (
            <div className="card-item-xgy" key={menu.id}>
              <div className="card-image-hyx flex justify-center py-7">
                <img src={menu.image} alt="" />
              </div>
              <div className="card-title-hyx text-white flex justify-center px-1 mx-4 py-1 rounded-3xl">
                <NavLink to={menu.path}>
                  <p>{menu.text}</p>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
