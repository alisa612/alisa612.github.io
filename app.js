const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://xinfangwu:UwcpHfHsbltkQPEA@cluster0.rrs7eyk.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect().then(() => {
  console.log("Connected to MongoDB");
  // Perform database operations here
}).catch(err => {
  console.error("Failed to connect to MongoDB", err);
});

let nameInput = document.getElementById("nameInput");
let continueButton = document.getElementById("continueButton");

continueButton.addEventListener("click", function() {
  let name = nameInput.value;
  alert("Hello, " + name + "! Welcome to our website.");
});