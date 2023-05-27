"use client";
import React, { useState } from "react";
import { connectToDatabase } from "../../config/mongodb";

export default function Inscription() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const CliquerInscrire = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { client, db } = await connectToDatabase();

      const usersCollection = db.collection("users");

      await usersCollection.insertOne({
        nom,
        email,
        motDePasse,
      });

      client.close();

      setNom("");
      setEmail("");
      setMotDePasse("");
    } catch (error) {
      console.log("Une erreur s'est produite lors de l'inscription :", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gun-powder-700 p-4">
      <div className="bg-white rounded-lg shadow p-8 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Inscription</h2>
        <form onSubmit={CliquerInscrire}>
          <div className="mb-4">
            <label className="block mb-2">Nom:</label>
            <input
              type="text"
              className="w-full border-gray-300 border rounded py-2 px-3"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              className="w-full border-gray-300 border rounded py-2 px-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Mot de passe:</label>
            <input
              type="password"
              className="w-full border-gray-300 border rounded py-2 px-3"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}
