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

    console.log("Récupération des informations des utilisateurs réussie");
    return users;
  } catch (error) {
    console.log(
      "Une erreur s'est produite lors de la récupération des informations des utilisateurs:",
      error
    );
  }
};

export const AjouterProduit = async (produit: any) => {
  try {
    const { client, db } = await connectToDatabase();
    const productsCollection = db.collection("Products");
    await productsCollection.insertOne(produit);
    client.close();

    console.log("ajout du produit réussi");
  } catch (error) {
    console.log(
      "une erreur s'est produite lors de l'ajout du produit :",
      error
    );
  }
};
