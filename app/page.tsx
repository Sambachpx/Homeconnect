import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Accueil",
};

export default function Home() {
  return (
    <div className="bg-black">
      <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
        <Image
          src="/geforce.jpg"
          height={0}
          width={2000}
          alt="carte graphique"
          className="pt-[10px]"
        />

        <Link href="/commander">
          <button className="text-black rounded-3xl h-10 w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold">
            Commander
          </button>
        </Link>

        <div className="flex space-x-4 m-auto text-center justify-center">
          <div className="flex flex-col items-center w-[500px]">
            <div className="flex justify-center">
              <div className="bg-cover">
                <Image
                  src="/batman.jpg"
                  width={200}
                  height={600}
                  alt="écran"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[350px]">
            <div className="flex justify-center">
              <div className="w-[600px]">
                <Image
                  src="/pc.png"
                  width={200}
                  height={100}
                  alt="pc gamers"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          +++++++++
        </div>

        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-[800px]">
              <Image
                src="/piece.jpg"
                width={600}
                height={100}
                alt="pièce graphique"
                className="w-full h-auto"
              />

              <button className="text-black rounded-3xl h-10 w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-10">
                Acheter
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
