"use client";

interface User {
  _id: string;
  nom: string;
  email: string;
  nombreAchats: number;
  sommeDepensee: number;
}

export default function Admin() {
  return (
    <div>
      <h1>Page Administrateur</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Nombre d'achats</th>
            <th>Somme dépensée</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
