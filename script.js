const form = document.querySelector("form");
const inputs = form.querySelectorAll("input, textarea");

inputs.forEach(function(input) {
  input.addEventListener("focus", function(event) {
    event.target.previousElementSibling.classList.add("active");
  });
  input.addEventListener("blur", function(event) {
    if (event.target.value === "") {
      event.target.previousElementSibling.classList.remove("active");
    }
  });
});