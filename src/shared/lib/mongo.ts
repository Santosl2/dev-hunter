/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-underscore-dangle */
// @ts-nocheck

import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function connectDB() {
  const connectMongo = await clientPromise;

  const data = connectMongo.db("devfinder");

  return data;
}

export default clientPromise;
