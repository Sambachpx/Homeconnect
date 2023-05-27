import { MongoClient, Db } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectToDatabase(): Promise<{
  client: MongoClient;
  db: Db;
}> {
  if (!MONGODB_URI) {
    throw new Error("Ajouter l'URI Mongo à .env.local");
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();

  const db = client.db();
  return { client, db };
}
