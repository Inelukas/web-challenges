const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  (age < 18 && age >= 13) ? (output.innerHTML = "You are a teen.") : (output.innerHTML = "You are not a teen.")
  if (age < 0) {
    output.innerHTML = "You transcended space and time. "
  }


  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
});


// using "value" instead of "innerHTML" works too