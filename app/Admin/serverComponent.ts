"use server";
import { connectToDatabase } from "../../config/mongodb";
export const RecupInfoUser = async () => {
  try {
    const { client, db } = await connectToDatabase();
    const usersCollection = db.collection("users");
    const users = await usersCollection
      .find({}, { projection: { motDePasse: 0 } })
      .toArray();

    client.close();

    console.log("recup des informations des utilisateurs réussie");
    return users;
  } catch (error) {
    console.log(
      "une erreur c produite pour la recup des informations des utilisateurs :",
      error
    );
  }
};
