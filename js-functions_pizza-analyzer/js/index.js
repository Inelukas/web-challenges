console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let pizzaSize1 = 0;
let pizzaSize2 = 0;

pizzaInput1.addEventListener("input", () => {
  pizzaSize1 = pizzaInput1.value;
  output.textContent = calculatePizzaGain(pizzaSize1, pizzaSize2);
  pizza1.style.width = updatePizzaDisplay(pizza1, pizzaInput1.value);
  updateOutputColor();
});

pizzaInput2.addEventListener("input", () => {
  pizzaSize2 = pizzaInput2.value;
  output.textContent = calculatePizzaGain(pizzaSize1, pizzaSize2);
  pizza2.style.width = updatePizzaDisplay(pizza2, pizzaInput2.value);
  updateOutputColor();
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * (diameter1 / 2) ** 2;
  const area2 = Math.PI * (diameter2 / 2) ** 2;
  return Math.round((area2 - area1) / area1 * 100);
}


// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  return (newSize / 24 * 100) + "px";
}

// Task 3
// define the function updateOutputColor here

function updateOutputColor() {
  if (output.textContent < 0) {
    outputSection.style.background = "var(--red)"
  }else{
    outputSection.style.background = "var(--green)"
  }
}

// Alternative:

// function updateOutputColor(size1, size2) {
//   if (size1 > size2) {
//     outputSection.style.background = "var(--red)"
//   }else{
//     outputSection.style.background = "var(--green)"
//   }
// }