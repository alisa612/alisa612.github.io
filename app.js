console.log("Starting script...");

//const uri = "mongodb+srv://xinfangwu:UwcpHfHsbltkQPEA@cluster0.rrs7eyk.mongodb.net/?retryWrites=true&w=majority"
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

/*client.connect().then(() => {
  console.log("Connected to MongoDB");
  // Perform database operations here
}).catch(err => {
  console.error("Failed to connect to MongoDB", err);
}); */

let nameInput1 = document.getElementById("nameInput1");
let nameInput2 = document.getElementById("nameInput2");
let nameInput3 = document.getElementById("nameInput3");
let continueButton = document.getElementById("continueButton");

function displayText() {
  let name1 = nameInput1.value;
  let name2 = nameInput2.value;
  let name3 = nameInput3.value;

  document.getElementById("text1").textContent = name1;
  document.getElementById("text2").textContent = name2;
  document.getElementById("text3").textContent = name3;
  document.getElementById("text1").style.display = "block";
  document.getElementById("text2").style.display = "block";
  document.getElementById("text3").style.display = "block";

};