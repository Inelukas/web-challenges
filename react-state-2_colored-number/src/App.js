import React, { useState } from "react";
import "./styles.css";
import Counter from "./components/Counter";

export default function App() {

  const [count, setCount] = useState(0)

  function addCount() {
    setCount(count + 1)
  }

  function subtractCount() {
    setCount(count - 1)
  }

  return <Counter count={count} addCount={addCount} subtractCount={subtractCount}/>;
}
