"use client";
import React, { useState } from "react";

const BackToTop = ({ scrollStepInPx = 50, delayInMs = 16 }) => {
  const [intervalId, setIntervalId] = useState(null);

  const scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  };

  const scrollToTop = () => {
    const id = setInterval(scrollStep, delayInMs);
    setIntervalId(id);
  };

  return (
    <div id="back2top" className="ps-btn--back-to-top" onClick={scrollToTop}>
      <i className="icon-chevron-up"></i>
    </div>
  );
};

export default BackToTop;
