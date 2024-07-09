console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
const numberA = parseInt(form.numberA.value);
const numberB = parseInt(form.numberB.value);

if (form.operator.value === "addition") {
  result = add(numberA, numberB)
}else if (form.operator.value === "subtraction") {
  result = subtract(numberA, numberB)
}else if (form.operator.value === "multiplication") {
    result = multiply(numberA, numberB)
}else {
  result = divide(numberA, numberB)
}
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
