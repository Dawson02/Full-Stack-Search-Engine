import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.body.offsetHeight;

      // Check if user scrolled to the bottom of the page
      if (scrollPosition >= pageHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`footer-container ${showFooter ? "visible" : ""}`}>
      <div className="footer-content">
        <p>&copy; 2024 Any Animal</p>
        <p>Braden Skiffington | Nathaniel Lane | Dawson Murray</p>
      </div>
    </footer>
  );
};

export default Footer;
