// import Circle from "./components/Circle/Circle.js";
// import Pentagon from "./components/Pentagon/Pentagon.js";
// import Square from "./components/Square/Square.js";
import Shape from "./components/Shape.js";

console.clear();

const root = document.getElementById("root");

const circleElement = Shape("circle");
const pentagonElement = Shape("pentagon");
const squareElement = Shape("square");

root.append(circleElement, pentagonElement, squareElement);
