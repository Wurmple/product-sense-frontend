import React, { useState } from "react";
import "../../styles/layout/Navbar.css";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import LoginModal from "./LoginModal";
import RegistrationModal from "./RegistrationModal";

const Navbar = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const onOpenLoginModal = () => setLoginModalOpen(true);
  const onCloseLoginModal = () => setLoginModalOpen(false);

  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
  const onOpenRegistrationModal = () => setRegistrationModalOpen(true);
  const onCloseRegistrationModal = () => setRegistrationModalOpen(false);

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
        <button onClick={onOpenLoginModal}>Sign In</button>
        <Modal open={loginModalOpen} onClose={onCloseLoginModal}>
          <LoginModal />
        </Modal>
        <button onClick={onOpenRegistrationModal}>Sign Up</button>
        <Modal open={registrationModalOpen} onClose={onCloseRegistrationModal}>
          <RegistrationModal />
        </Modal>
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
          <img src="/assets/shyamp.jpg" alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
