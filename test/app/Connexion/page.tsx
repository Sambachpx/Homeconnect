"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CliquerConnexion } from "./serverComponent";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminLogger, setIsAdminLoggedIn] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await CliquerConnexion(email, password);
      setEmail("");
      setPassword("");
      setIsAdminLoggedIn(email === "admin@admin" && password === "admin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gun-powder-700 p-4">
      <div className="bg-white rounded-lg shadow p-8 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              className="w-full border-gray-300 border rounded py-2 px-3"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Mot de passe:</label>
            <input
              type="password"
              className="w-full border-gray-300 border rounded py-2 px-3"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Se connecter
          </button>
        </form>
        {adminLogger && (
          <div className="text-center mt-4">
            <Link href="/Admin">
              <div className="text-blue-500 underline cursor-pointer">
                Accéder à l'espace administrateur
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
