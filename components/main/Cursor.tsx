"use client";

import React, { useState, useEffect } from "react";

const FlareCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = (e: { clientX: any; clientY: any; target: any; }) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target;
    const isClickable = target.classList.contains("clickable") || target.closest(".clickable");

    setIsPointer(!isClickable);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const flareSize = isPointer ? 0 : 30;

  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  return (
    <div
      className={`flare `}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
      }}
    ></div>
  );
};

export default FlareCursor;
