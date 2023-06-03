"use client";
import { getUsers } from "./serverComponent";

interface User {
  _id: string;
  nom: string;
  email: string;
  nombreAchats: number;
  sommeDepensee: number;
}

interface UsersProps {
  users: User[];
}

export async function getServerSideProps() {
  const users = await getUsers();
  return { props: { users } };
}

export default function Admin({ users }: UsersProps) {
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
