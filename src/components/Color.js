import React from "react";
import { useState } from "react";

export default function Color() {
  const [color, setColor] = useState("");

  const handleInput = (color) => {
    setColor(color);
  };

  return (
    <>
      <div className="Box" style={{ backgroundColor: color }}>
        <h1>Change color</h1>

        <input onChange={(e) => handleInput(e.target.value)} />
      </div>
    </>
  );
}
