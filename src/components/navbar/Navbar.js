import React, { useState, useCallback } from "react";
import logo from "../../assets/images/logo.png";
import "./styles.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const navigate = useCallback(
    (sectionId) => {
      const section = document.getElementById(sectionId);

      const offset = window.innerWidth < 768 ? 0 : 93;

      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth",
      });
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    },
    [isMenuOpen],
  );

  return (
    <section className="navbar-section">
      <div className="wrapper">
        <div className="actions">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <button
            class={`hamburger ${isMenuOpen ? "active" : ""}`}
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={isMenuOpen ? "navlinks active" : "navlinks"}>
          <button className="font-2" onClick={() => navigate("services")}>
            Services
          </button>
          <button className="font-2" onClick={() => navigate("partners")}>
            For Partners
          </button>
          <button className="font-2" onClick={() => navigate("discover")}>
            Bhutan
          </button>
          <button className="font-2" onClick={() => navigate("contact")}>
            Contact Us
          </button>
          <button className="font-2" onClick={() => navigate("about")}>
            About Us
          </button>
          <button className="font-2" onClick={() => navigate("enquiry")}>
            Partner with us
          </button>
        </div>
      </div>
    </section>
  );
};
