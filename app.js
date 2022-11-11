const express = require("express");
const ejs = require("ejs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/submit-name", (req, res) => {
  const name = req.body.nama;
  const alamat = req.body.alamat;
  const email = req.body.email;
  const nomor = req.body.nomor;

  res.render("data", {
    nama: name,
    alamat: alamat,
    email: email,
    nomor: nomor,
  });
});

app.listen(3000, function () {
  console.log("Server is up");
});
