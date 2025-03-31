import { MongoClient } from 'mongodb';

if (!process.env.MONGO_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const uri = process.env.MONGO_URI;
const options = {};


// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   let globalWithMongo = global as typeof globalThis & {
//     _mongoClientPromise?: Promise<MongoClient>;
//   };

//   if (!globalWithMongo._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     globalWithMongo._mongoClientPromise = client.connect();
//   }
//   clientPromise = globalWithMongo._mongoClientPromise;
// } else {
  // In production mode, it's best to not use a global variable.
const client = new MongoClient(uri, options);
const clientPromise = client.connect();

export default clientPromise; 