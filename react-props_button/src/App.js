import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <>
      <Button
        color={"red"}
        text="Ich bin ein Button"
        onClick={handleClick}
      />
      <Button
        color={"grey"}
        text="Ich bin auch ein Button"
        onClick={handleClick}
        disabled
      />
    </>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      onClick={disabled ? null : onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}
