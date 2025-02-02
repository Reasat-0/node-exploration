const mongodb = require("mongodb");

const { MongoClient } = mongodb;

// Got  the URL from MONGO Compass
const url =
  "mongodb+srv://reasattc:ipd3N5dLWh7YJy10@whoknows.b9q35.mongodb.net/";

//   Creating an instance of MongoClient
const client = new MongoClient(url);

// Declaring the DB Name..
const dbName = "DummyDB";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // ============== OPERATIONs ======================

  //  ----- Inserting
  const user = {
    nameeee: "Salman",
    age: "48",
    sex: "M",
    profession: "Actor",
    name: "Salman 1",
  };
  //   const insertResult = await collection.insertMany([user]);
  //   console.log("Inserted documents =>", insertResult);
  // the following code examples can be pasted here...

  // ------Updating...
  const updateResult = await collection.updateOne(
    { ...user },
    { $set: { ...user, name: "Salman 1" } }
  );
  console.log("Updated documents =>", updateResult);

  // Deleting
  const deleteResult = await collection.deleteMany({ ...user });
  console.log("Deleted documents =>", deleteResult);

  //   ------Reading...
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
