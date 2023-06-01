import { MongoClient, Db } from "mongodb";

const uri =
  "mongodb+srv://sambachamproux:q0HgSgDICQaun62f@cluster0.ustmmhl.mongodb.net/?retryWrites=true&w=majority";

export async function connectToDatabase(): Promise<{
  client: MongoClient;
  db: Db;
}> {
  if (!uri) {
    throw new Error("ajouter l'URI mongo à .env.local");
  }

  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db();
  return { client, db };
}
