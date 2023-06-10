"use client";
import React, { useState, useEffect } from "react";
import { RecupInfoUser } from "./serverComponent";

interface User {
  _id: string;
  nom: string;
  email: string;
  nombreAchats: number;
  sommeDepensee: number;
}

export default function Admin() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await RecupInfoUser();
      setUsers(usersData as unknown as User[]);
    };

    fetchUsers();
  }, []);

  return (
    <div>
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
  );
}
