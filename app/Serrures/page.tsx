import Image from "next/image";
export const metadata = {
  title: "Serrures Connectées",
};

export default function Serrure() {
  return (
    <>
      <h1 className="text-red-500 text-center text-4xl my-8">
        Serrures Connectées
      </h1>
      <div className="container mx-auto px-4">
        <p className="text-gray-600 text-center mb-8">
          Découvrez notre gamme de serrures connectées pour sécuriser votre
          domicile et contrôler laccès de manière intelligente.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-4">
            <Image
              src={"/serrure1.jpeg"}
              height={0}
              width={200}
              alt="image camera1"
            />
            <h3 className="text-xl mb-2">Serrure Connectée</h3>
            <p className="text-gray-500 mb-4">
              Contrôlez et surveillez laccès à votre domicile depuis votre
              smartphone
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg">149,99 €</span>
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
              src={"/serrure2.jpeg"}
              height={0}
              width={200}
              alt="image camera1"
            />
            <h3 className="text-xl mb-2">Serrure Connectée 2</h3>
            <p className="text-gray-500 mb-4">
              Description de la serrure connectée 2
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg">169,99 €</span>
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
              src={"/serrure3.jpeg"}
              height={0}
              width={200}
              alt="image camera1"
            />
            <h3 className="text-xl mb-2">Serrure Connectée 3</h3>
            <p className="text-gray-500 mb-4">
              Description de la serrure connectée 3
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg">199,99 €</span>
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
