import React from "react";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="/">セッション1</a>
        </li>
        <li>
          <a href="/about">セッション2</a>
        </li>
        <li>
          <a href="/contact">セッション3</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
