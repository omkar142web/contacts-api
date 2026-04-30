import { MongoClient } from "mongodb";

const URI = "mongodb+srv://userNameOP:17102006om@cluster0.05uptec.mongodb.net/";
const client = new MongoClient(URI);

let dbConnection;

// ! for/in SERVER file to start (initialized)
// { like this -- await connectDB(); }
export const connectDB = async (dbname) => {
  try {
    await client.connect();
    dbConnection = client.db("contacts-api");
    // dbConnection = client.db(`${dbname}`);
    console.log(`🍃 Database connected: ${dbname}`);
  } catch (err) {
    console.error("❌ Connection failed:", err);
    throw err;
  }
};

// ! for/in Controller code file..
export const getCollection = (collectionName) => {
  if (!dbConnection) {
    throw new Error("Database not initialized. Call connectDB first.");
  }
  return dbConnection.collection(collectionName);
};
