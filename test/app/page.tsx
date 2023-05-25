import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil</title>
      </Head>
      <h1 className="text-red-500">Bienvenue sur notre site de domotique</h1>
      <div
        style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}
      ></div>
      <p className="text-gray-600">
        Découvrez notre large sélection d'appareils domotiques pour rendre votre
        maison intelligente et connectée.
      </p>
      {/* Autres contenus */}
    </>
  );
}
