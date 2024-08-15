import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Ich bin Button 1</Button>
      <Button>Und ich zwei</Button>
      <Button>Ich drei</Button>
      <Button type="submit">Numero Vier</Button>
    </main>
  );
}

function Button({ children, type = "button" }) {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  );
}
