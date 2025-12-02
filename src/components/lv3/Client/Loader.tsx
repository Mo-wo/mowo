'use client';

import React from "react";

const CanvasLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <span className="canvas-loader" aria-label="Loading" />
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        Loading...
      </p>
    </div>
  );
};

export default CanvasLoader;