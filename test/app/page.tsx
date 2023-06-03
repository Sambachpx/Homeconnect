export const metadata = {
  title: "Accueil",
};

export default function Home() {
  return (
    <>
      <h1 className="text-red-500 text-center text-4xl my-8">
        Bienvenue sur HomeConnect
      </h1>
      <div className="container mx-auto px-4">
        <p className="text-gray-600 text-center mb-8">
          Découvrez notre sélection d'appareils domotiques pour rendre votre
          maison intelligente et connectée.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-4">
            <img
              src="a remplacer"
              alt="Ampoule Connectée"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl mb-2">Ampoule Connectée</h3>
            <p className="text-gray-500 mb-4">
              Ampoule LED intelligente compatible avec Alexa et Google Home
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg">29,99 €</span>
              <a
                href="a remplacer"
                className="bg-green-500 text-white px-4 py-2"
              >
                ajouter au panier
              </a>
            </div>
          </div>
          <div className="bg-white p-4">
            <img
              src="a remplacer"
              alt="Prise Connectée"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl mb-2">Prise Connectée</h3>
            <p className="text-gray-500 mb-4">
              controlez vos appareils avec votre smartphone
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg">19,99 €</span>
              <a
                href="a remplacer"
                className="bg-green-500 text-white px-4 py-2"
              >
                Ajouter au panier
              </a>
            </div>
          </div>

          <div className="bg-white p-4">
            <img
              src="a remplacer"
              alt="Caméra de Sécurité"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl mb-2">Caméra de Sécurité</h3>
            <p className="text-gray-500 mb-4">
              Caméra IP sans fil avec vision nocturne et détection de mouvement
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg">59,99 €</span>
              <a
                href="/product/3"
                className="bg-green-500 text-white px-4 py-2"
              >
                Ajouter au panier
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
