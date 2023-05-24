import Link from "next/link";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) 

{
  return (
    <>
      <header>
        <ul>
          <li><Link href={"/"}>Accueil</Link></li>
          <li><Link href={"/about"}>About</Link></li>
          <li><Link href={"/camera"}>Caméras Connectées</Link></li>
        </ul>
        <form>
          <input type="text" placeholder="Rechercher..." />
        </form>
      </header>
      <main>{children}</main>
    </>
  );
}
