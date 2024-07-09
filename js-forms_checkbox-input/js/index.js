console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const tosSuccess = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
  tosSuccess.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError();
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
if (tosCheckbox.checked === false) {
  showTosError();
  return
}
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  tosSuccess.removeAttribute("hidden");
  alert("Form submitted");
});

tosCheckbox.addEventListener("click", () => {
  if (tosCheckbox.checked === false) {
    showTosError();
  }else{
  hideTosError();}
})