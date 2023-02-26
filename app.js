let nameInput = document.getElementById("nameInput");
let continueButton = document.getElementById("continueButton");

continueButton.addEventListener("click", function() {
  let name = nameInput.value;
  alert("Hello, " + name + "! Welcome to our website.");
});