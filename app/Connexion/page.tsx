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
    <div className="flex flex-col items-center justify-center h-screen bg-steel-gray p-4">
      <div className="bg-purple-800 rounded-lg shadow p-8 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Connexion
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-white">Email:</label>
            <input
              type="email"
              className="w-full border-gray-300 border rounded py-2 px-3"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-white">Mot de passe:</label>
            <input
              type="password"
              className="w-full border-gray-300 border rounded py-2 px-3"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-steel-gray hover:bg-opacity-25 hover:bg-white text-white font-bold py-2 px-4 rounded"
          >
            Se connecter
          </button>
        </form>
        {adminLogger && (
          <div className="text-center mt-4">
            <Link href="/Admin">
              <div className="text-white underline cursor-pointer">
                Accéder à lespace administrateur
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
