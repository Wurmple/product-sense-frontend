import { React, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  MdMenu,
  MdHome,
  MdAccountCircle,
  MdSwipe,
  MdSearch,
  MdDashboard,
  MdDashboardCustomize,
  MdInfo,
} from "react-icons/md";
import { FaGift, FaLock } from "react-icons/fa";

import "../../styles/layout/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      path: "/",
      name: "Home",
      icon: <MdHome />,
    },
    {
      path: "/account",
      name: "Account",
      icon: <MdAccountCircle />,
    },
    {
      path: "/discover",
      name: "Discover",
      icon: <MdSwipe />,
    },
    {
      path: "/browse",
      name: "Browse",
      icon: <MdSearch />,
    },
    {
      path: "/seller/dashboard",
      name: "Seller Dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "/admin/dashboard",
      name: "Admin Dashboard",
      icon: <MdDashboardCustomize />,
    },
    {
      path: "/reward",
      name: "Rewards",
      icon: <FaGift />,
    },
    {
      path: "/about",
      name: "About",
      icon: <MdInfo />,
    },
    {
      path: "/privacy-policy",
      name: "Privacy",
      icon: <FaLock />,
    },
  ];
  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <div className="logo-section">
        <h1 hidden={!isOpen}>ProductSense</h1>
        <div className="menu-button">
          <MdMenu onClick={toggle} />
        </div>
      </div>
      <div className={isOpen ? "nav-section open" : "nav-section"}>
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              isOpen
                ? isActive
                  ? "menu-item open active"
                  : "menu-item open"
                : isActive
                ? "menu-item active"
                : "menu-item"
            }
          >
            <div className="item-icon">{item.icon}</div>
            <div className="item-text" hidden={!isOpen}>
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
