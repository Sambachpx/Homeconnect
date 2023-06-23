import Image from "next/image";
export const metadata = {
  title: "Prises Connectées",
};

export default function Prise() {
  return (
    <>
      <h1 className="text-red-500 text-center text-4xl my-8">
        Prises Connectées
      </h1>
      <div className="container mx-auto px-4">
        <p className="text-gray-600 text-center mb-8">
          Découvrez notre gamme de prises connectées pour contrôler vos
          appareils électriques à distance et optimiser votre consommation
          dénergie.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-4">
            <Image
              src={"/prise1.jpeg"}
              height={0}
              width={200}
              alt="image prise 1"
              className="w-full h-auto"
            />
            <h3 className="text-xl mb-2">Prise Connectée</h3>
            <p className="text-gray-500 mb-4">
              Contrôlez vos appareils électriques avec votre smartphone
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
              src={"/prise2.jpeg"}
              height={0}
              width={200}
              alt="image prise 2"
              className="w-full h-auto"
            />
            <h3 className="text-xl mb-2">Prise Connectée 2</h3>
            <p className="text-gray-500 mb-4">
              Description de la prise connectée 2
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
            <Image
              src={"/prise3.jpeg"}
              height={0}
              width={200}
              alt="image prise 3"
              className="w-full h-auto"
            />
            <h3 className="text-xl mb-2">Prise Connectée 3</h3>
            <p className="text-gray-500 mb-4">
              Description de la prise connectée 3
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
        </div>
      </div>
    </>
  );
}
