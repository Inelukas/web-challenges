import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Ich bin Button 1</Button>
      <Button>Und ich zwei</Button>
      <Button>Ich drei</Button>
      <Button>Numero Vier</Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
