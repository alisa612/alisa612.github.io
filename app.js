let name = prompt("Please enter your name:");

let button = document.createElement("button");
button.innerHTML = "Continue";
document.body.appendChild(button);

button.addEventListener("click", function() {
  alert("Hello, " + name + "! Welcome to our website.");
});