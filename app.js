require("dotenv").config();
const express = require("express");
const cors = require("cors");
const destinationsLightMode = require("./destinationsLightMode");

const app = express();
const port = 3001;

app.use(cors());

app.get("/destinations", async function (req, res) {
  const result = await destinationsLightMode.findDestinationsPromise();
  res.json(result);
});
app.get("/", function (req, res) {
  res.send("Hello there, you are in the wrong endpoint! Don't freak out!");
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
