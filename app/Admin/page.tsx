"use client";
import React, { useState, useEffect } from "react";
import { RecupInfoUser, AjouterProduit } from "./serverComponent";

interface User {
  _id: string;
  nom: string;
  email: string;
  nombreAchats: number;
  sommeDepensee: number;
}

export default function Admin() {
  const [users, setUsers] = useState<User[]>([]);
  const [nom, setNom] = useState("");
  const [categorie, setCategorie] = useState("");
  const [prix, setPrix] = useState(0);
  const [description, setDescription] = useState("");
  const [caracteristiques, setCaracteristiques] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await RecupInfoUser();
      setUsers(usersData as unknown as User[]);
    };

    fetchUsers();
  }, []);

  const handleAjouterProduit = async () => {
    const produit = {
      nom,
      categorie,
      prix,
      description,
      caracteristiques: caracteristiques.split(","),
    };

    await AjouterProduit(produit);
    setNom("");
    setCategorie("");
    setPrix(0);
    setDescription("");
    setCaracteristiques("");
  };

  return (
    <div className="flex">
      <div className="w-1/2">
        <h1>Page Administrateur</h1>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Nombre achats</th>
              <th>Somme dépensée</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => (
              <tr key={user._id}>
                <td>{user.nom}</td>
                <td>{user.email}</td>
                <td>{user.nombreAchats}</td>
                <td>{user.sommeDepensee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-1/2">
        <h2>Ajouter un produit :</h2>
        <form>
          <label>Nom:</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <br />
          <label>Catégorie:</label>
          <input
            type="text"
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
          />
          <br />
          <label>Prix:</label>
          <input
            type="number"
            value={prix}
            onChange={(e) => setPrix(Number(e.target.value))}
          />
          <br />
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label>Caractéristiques:</label>
          <input
            type="text"
            value={caracteristiques}
            onChange={(e) => setCaracteristiques(e.target.value)}
          />
          <br />
          <button type="button" onClick={handleAjouterProduit}>
            Ajouter le produit
          </button>
        </form>
      </div>
    </div>
  );
}
