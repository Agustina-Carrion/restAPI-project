require("dotenv").config();
const express = require("express");
const cors = require("cors");
const destinationsLight = require("./destinationsLight");

const app = express();
const port = 3001;

app.use(cors());

app.get("/destinations", async function (req, res) {
  const result = await destinationsLight.findDestinationsPromise();
  res.json(result);
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
