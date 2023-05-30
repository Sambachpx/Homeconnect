"use server";
import { connectToDatabase } from "../../config/mongodb";

export const CliquerInscrire = async (
  nom: string,
  email: string,
  motDePasse: string,
  setNom: React.Dispatch<React.SetStateAction<string>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setMotDePasse: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const { client, db } = await connectToDatabase();

    const usersCollection = db.collection("users");

    await usersCollection.insertOne({
      nom,
      email,
      motDePasse,
    });

    client.close();

    console.log("inscription réussie");
    setNom("");
    setEmail("");
    setMotDePasse("");
  } catch (error) {
    console.log("une erreur s'est produite lors de l'inscription :", error);
  }
};
