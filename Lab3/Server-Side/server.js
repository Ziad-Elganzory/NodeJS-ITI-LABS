const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let welcomeHTML = fs.readFileSync("../Client-Side/pages/profile.html").toString();
let users_array = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client-Side/pages/home.html"));
});
app.get("/styles/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client-Side/styles/style.css"));
});
app.get("/scripts/script.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client-Side/scripts/script.js"));
});
app.get("/profile.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client-Side/pages/profile.html"));
});
app.get("/scripts/users.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client-Side/scripts/users.js"));
});
app.get("/json/clients.json", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client-Side/json/clients.json"));
});

app.post(
  "/profile.html",
  (req, res, next) => {
    let name = req.body.name;
    let email = decodeURIComponent(req.body.email.replaceAll("+", " "));
    let phone = req.body.mobile;
    let address = req.body.address;
    let client = {
      username: name,
      address: address,
      phone: phone,
      email: email,
    };
    welcomeHTML = welcomeHTML
      .replace("{userName}", client.username)
      .replace("{userAddress}", client.address)
      .replace("{userMobile}", client.phone)
      .replace("{userEmail}", client.email);

    let data = fs.readFileSync("../Client-Side/json/clients.json");
    users_array = JSON.parse(data);
    users_array.push(client);
    fs.writeFileSync("../Client-Side/json/clients.json", JSON.stringify(users_array));
    next();
  },
  (req, res) => {
    res.send(welcomeHTML);
  }
);

app.listen(7000, () => console.log("http://localhost:7000"));