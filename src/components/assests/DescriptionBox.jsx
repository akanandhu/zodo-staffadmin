import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const DescriptionBox = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const checkHeight = () => {
      const el = descriptionRef.current;
      if (!el) return;

      const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
      const maxLines = 3;
      const maxHeight = lineHeight * maxLines;

      if (el.scrollHeight > maxHeight) {
        setShowButton(true);
      }
    };

    checkHeight();
    window.addEventListener("resize", checkHeight);
    return () => window.removeEventListener("resize", checkHeight);
  }, [text]);

  const toggleExpand = () => setExpanded((prev) => !prev);

  return (
    <div>
      <div
        className={`description-box ${expanded ? "expanded" : ""}`}
        ref={descriptionRef}
      >
        <p>{text}</p>
      </div>
      {showButton && (
        <button
          className="btn btn-link p-0 text-primary"
          onClick={toggleExpand}
          style={{ fontSize: "0.9rem" }}
        >
          {expanded ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
};

DescriptionBox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default DescriptionBox;