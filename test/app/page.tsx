import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil</title>
      </Head>
      <h1 className="text-red-500">Accueil</h1>
      <div style={{ width: "100%", height: "auto" }}></div>
      {/* pour les autres contenus */}
    </>
  );
}
