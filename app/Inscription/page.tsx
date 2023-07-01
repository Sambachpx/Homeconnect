"use client";
import React, { useState } from "react";
import { CliquerInscrire } from "./serverComponent";

export default function Inscription() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await CliquerInscrire(nom, email, password);
      setNom("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-steel-gray p-4">
      <div className="bg-white rounded-lg shadow p-8 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-steel-gray">
          Inscription
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-steel-gray">Nom:</label>
            <input
              type="text"
              className="w-full border-gray-300 border rounded py-2 px-3"
              value={nom}
              onChange={(event) => setNom(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-steel-gray">Email:</label>
            <input
              type="email"
              className="w-full border-gray-300 border rounded py-2 px-3"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-steel-gray">Mot de passe:</label>
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
            Sinscrire
          </button>
        </form>
      </div>
    </div>
  );
}
