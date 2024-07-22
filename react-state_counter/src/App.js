import {React, useState } from "react";
import "./styles.css";

export default function App() {
  let [count, setCount] = useState(0)


function changeNumber(operator) {
  setCount(operator === '+' ? count + 1 : count - 1);
}

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => changeNumber("-")}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => changeNumber("+")}
        >
          +
        </button>
      </div>
    </div>
  );
}
