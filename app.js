console.log("Starting script...");

const uri = "mongodb+srv://xinfangwu:UwcpHfHsbltkQPEA@cluster0.rrs7eyk.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);

let nameInput = document.getElementById("nameInput");
let continueButton = document.getElementById("continueButton");

client.connect().then(() => {
  console.log("Connected to MongoDB");
  // Perform database operations here
}).catch(err => {
  console.error("Failed to connect to MongoDB", err);
});

continueButton.addEventListener("click", function() {
  let name = nameInput.value;
  alert("Hello, " + name + "! Welcome to our website.");

  const newUser = { name: nameInput.value};
  client.db().collection("users").insertOne(newUser, (err, result) => {
    if (err) {
      console.error("Failed to insert user", err);
    } else {
      console.log("Inserted user", newUser);
    }
  });
});