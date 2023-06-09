"use server";
import { connectToDatabase } from "../../config/mongodb";

export const CliquerInscrire = async (
  nom: string,
  email: string,
  motDePasse: string
) => {
  try {
    const { client, db } = await connectToDatabase();

    const usersCollection = db.collection("users");

    await usersCollection.insertOne({
      nom,
      email,
      motDePasse,
      nombreAchats: 0,
      sommeDepensee: 0,
    });

    client.close();

    console.log("inscription réussie");
  } catch (error) {
    console.log("une erreur s'est produite lors de l'inscription :", error);
  }
};