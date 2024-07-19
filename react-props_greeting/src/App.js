import "./styles.css";

export default function App() {
  return <Greeting name="Dominik" />;
}

function Greeting({ name }) {
  return <h1>{name === "Dominik" ? "Hello Coach" : `Hello ${name}`}</h1>;
}
