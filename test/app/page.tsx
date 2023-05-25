import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <Image src="/blabla.png" alt="image_header_home" />
        <title>Accueil</title>
      </Head>
      <h1 className="text-red-500">Accueil</h1>
      {/* pour les autres pages */}
    </>
  );
}
