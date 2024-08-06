import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI ?? '';
const client = new MongoClient(uri);
const database = client.db('moe-counter');

export default database;