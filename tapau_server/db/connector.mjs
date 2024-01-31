import { MongoClient } from "mongodb";
const uri = "mongodb+srv://akmalkmrlzmn:amirul99@cluster0.qtsyrrd.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
let db;
try {
  await client.connect();
  db = client.db("tapau_app");
} catch(e) {
  console.error(e);
}

export default db;