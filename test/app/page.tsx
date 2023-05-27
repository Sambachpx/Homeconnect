export const metadata = {
  title: "Accueil",
};

export default function Home() {
  return (
    <>
      <h1 className="text-red-500">Bienvenue sur HomeConnect</h1>
      <div
        style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}
      ></div>
      <p className="text-gray-600">
        Découvrez notre sélection d'appareils domotiques pour rendre votre
        maison intelligente et connectée.
      </p>
      {/* Autres contenus */}
    </>
  );
}
