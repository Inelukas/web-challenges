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
        clickEvent={handleClick}
      />
      <Button
        color={"grey"}
        text="Ich bin auch ein Button"
        clickEvent={handleClick}
        disabled
      />
    </>
  );
}

function Button({ color, disabled, text, clickEvent }) {
  return (
    <button
      onClick={disabled ? null : clickEvent}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}
