"use server";
import { connectToDatabase } from "../../config/mongodb";

export const getUsers = async () => {
  try {
    const { client, db } = await connectToDatabase();

    const usersCollection = db.collection("users");

    const users = await usersCollection
      .find({}, { projection: { motDePasse: 0 } })
      .toArray();

    client.close();

    return users;
  } catch (error) {
    console.log(
      "une erreur s'est produite lors de la récupération des utilisateurs :",
      error
    );
    return [];
  }
};
