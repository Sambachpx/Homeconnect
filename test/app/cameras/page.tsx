export const metadata = {
  title: "Caméras Connectées",
};

export default function Camera() {
  return (
    <>
      <h1 className="text-red-500 text-center text-4xl my-8">
        Caméras Connectées
      </h1>
      <div className="container mx-auto px-4">
        <p className="text-gray-600 text-center mb-8">
          Découvrez notre gamme de caméras connectées pour surveiller et
          sécuriser votre domicile en temps réel.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-4">
            <img
              src="a remplacer"
              alt="Caméra Connectée"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl mb-2">Caméra Connectée</h3>
            <p className="text-gray-500 mb-4">
              Surveillez votre domicile depuis votre smartphone
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg">99,99 €</span>
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
              alt="Caméra Connectée 2"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl mb-2">Caméra Connectée 2</h3>
            <p className="text-gray-500 mb-4">
              Description de la caméra connectée 2
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg">119,99 €</span>
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
              alt="Caméra Connectée 3"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl mb-2">Caméra Connectée 3</h3>
            <p className="text-gray-500 mb-4">
              Description de la caméra connectée 3
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg">139,99 €</span>
              <a
                href="a remplacer"
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
