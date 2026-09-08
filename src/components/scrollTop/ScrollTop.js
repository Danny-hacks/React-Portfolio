import React, { useState, useEffect } from "react";
import "./scrollTop.css";
import { BsArrowUp } from "react-icons/bs";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll_top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label='Scroll to top'
    >
      <BsArrowUp />
    </button>
  );
};

export default ScrollTop;
