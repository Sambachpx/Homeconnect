"use client";
import React from "react";

export default function Connexion() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-steel-gray p-4">
      <div className="bg-white rounded-lg shadow p-8 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Connexion</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              className="w-full border-gray-300 border rounded py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Mot de passe:</label>
            <input
              type="password"
              className="w-full border-gray-300 border rounded py-2 px-3"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
