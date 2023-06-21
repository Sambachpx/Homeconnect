import Image from "next/image";

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
          Découvrez notre sélection dappareils domotiques pour rendre votre
          maison intelligente et connectée.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-4">
            <Image
              src={"/ampoule1.jpeg"}
              height={0}
              width={200}
              alt="image ampoule1"
              className="w-full h-auto"
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
                ajouter au panier
              </a>
            </div>
          </div>
          <div className="bg-white p-4">
            <Image
              src={"/prise1.jpeg"}
              height={0}
              width={200}
              alt="image prise1"
              style={{ width: "auto" }}
            />
            <h3 className="text-xl mb-2">Prise Connectée</h3>
            <p className="text-gray-500 mb-4">
              controlez vos appareils avec votre smartphone
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg">19,99 €</span>
              <a
                href="/test/public/ampoule1.jpeg"
                className="bg-green-500 text-white px-4 py-2"
              >
                Ajouter au panier
              </a>
            </div>
          </div>

          <div className="bg-white p-4">
            <Image
              src={"/camera1.webp"}
              height={0}
              width={200}
              alt="image camera1"
              className="w-full h-auto"
              priority={true}
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
