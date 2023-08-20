import React from "react";

const Overlay = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  };

  const closeButtonStyle = {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    float: "right",
  };

  return (
    <div style={overlayStyle}>
      <div style={contentStyle}>
        <button style={closeButtonStyle} onClick={onClose}>
          Close
        </button>
        <p>This is the overlay content.</p>
      </div>
    </div>
  );
};

export default Overlay;
