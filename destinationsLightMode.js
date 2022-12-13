const { MongoClient } = require("mongodb");

const url = process.env.MONGO_DB;
const client = new MongoClient(url);
const dbName = "finalProjectDB";

async function findDestinations(callback) {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("destinationsLightMode");

  const findResult = await collection.find().toArray();

  callback(findResult);
}

async function findDestinationsPromise() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("destinationsLightMode");

  const findResult = await collection.find().toArray();

  return findResult;
}

module.exports = {
  findDestinations,
  findDestinationsPromise,
};
