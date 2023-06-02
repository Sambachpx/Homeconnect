"use server";
import { connectToDatabase } from "../../config/mongodb";

export const CliquerConnexion = async (email: string, motDePasse: string) => {
  try {
    const { client, db } = await connectToDatabase();

    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({ email, motDePasse });

    client.close();

    if (user) {
      console.log("Connexion réussie");
      console.log("Nom d'utilisateur :", user.nom);
      console.log("Mot de passe :", user.motDePasse);
      // redirection a faire
    } else {
      console.log("Email ou mot de passe invalide");
    }
  } catch (error) {
    console.log("Une erreur s'est produite lors de la connexion :", error);
  }
};

/*
"use server";
import { connectToDatabase } from "../../config/mongodb";

export const CliquerConnexion = async (email: string, motDePasse: string) => {
  try {
    const { client, db } = await connectToDatabase();

    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({ email, motDePasse });

    client.close();

    if (user) {
      console.log("connexion réussie");
      return user;
    } else {
      console.log("Email ou mot de passe invalide");
      return null;
    }
  } catch (error) {
    console.log("une erreur s'est produite lors de la connexion :", error);
    return null;
  }
};

export const fetchUsers = async () => {
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
*/
