let input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter your name";
document.body.appendChild(input);

let button = document.createElement("button");
button.innerHTML = "Continue";
document.body.appendChild(button);

button.addEventListener("click", function() {
  let name = input.value;
  alert("Hello, " + name + "! Welcome to our website.");
});