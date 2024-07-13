import { getRandomColor } from "./../../utils/randomColor.js"

export default function Shape(myshape) {
    const shape = document.createElement("div");
    shape.classList.add(myshape);
    shape.style.backgroundColor = getRandomColor();
    shape.addEventListener("click", () => {
    shape.style.backgroundColor = getRandomColor();
  });
    return shape;
  }