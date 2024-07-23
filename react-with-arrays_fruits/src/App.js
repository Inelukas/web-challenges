import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1337, name: "Banana", color: "yellow" },
    { id: 1117, name: "Apple", color: "red" },
    { id: 1997, name: "Mango", color: "orange" },
    { id: 4437, name: "Guava", color: "green" },
    { id: 1097, name: "Coconut", color: "grey" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      })}
    </div>
  );
}
