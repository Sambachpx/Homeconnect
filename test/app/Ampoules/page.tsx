export const metadata = {
  title: "Ampoules Connectées",
};

export default function Ampoule() {
  return (
    <>
      <h1 className="text-red-500 text-center text-4xl my-8">
        Ampoules Connectées
      </h1>
      <div className="container mx-auto px-4">
        <p className="text-gray-600 text-center mb-8">
          Découvrez notre gamme d'ampoules connectées pour rendre votre maison
          intelligente et écoénergétique.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-4">
            <img
              src="/test/public/ampoule1.jpeg"
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
                href="/test/public/ampoule1.jpeg"
                className="bg-green-500 text-white px-4 py-2"
              >
                Ajouter au panier
              </a>
            </div>
          </div>

          <div className="bg-white p-4">
            <img
              src="/test/public/ampoule1.jpeg"
              alt="Ampoule Connectée 2"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl mb-2">Ampoule Connectée 2</h3>
            <p className="text-gray-500 mb-4">
              Description de l'ampoule connectée 2
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg">39,99 €</span>
              <a
                href="/test/public/ampoule1.jpeg"
                className="bg-green-500 text-white px-4 py-2"
              >
                Ajouter au panier
              </a>
            </div>
          </div>

          <div className="bg-white p-4">
            <img
              src="/test/public/ampoule1.jpeg"
              alt="Ampoule Connectée 3"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl mb-2">Ampoule Connectée 3</h3>
            <p className="text-gray-500 mb-4">
              Description de l'ampoule connectée 3
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg">49,99 €</span>
              <a
                href="/test/public/ampoule1.jpeg"
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
