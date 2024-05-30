import React from "react";
import "../../styles/layout/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">ProductSense</div>
      {/* Slogan */}
      <div className="slogan">Democratizing Product Discovery!</div>{" "}
      {/* Replace with your slogan */}
      {/* Announcement section */}
      <div className="announcement">
        <span role="img" aria-label="Announcement"></span>{" "}
        {/* Loudspeaker icon for announcement */}
        <span>Important Announcement Text Here</span>{" "}
        {/* Replace with your announcement text */}
      </div>
      {/* Action buttons */}
      <div className="actions">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
      {/* User section (optional) */}
      <div className="user">
        <div className="notifications">
          <span role="img" aria-label="Notifications"></span>
        </div>
        <div className="points">
          <span role="img" aria-label="Points">
            ⭐
          </span>{" "}
          100
        </div>
        <div className="profile-picture">
          <img src="/assets/shyamp.jpg" alt="Profile Picture" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
