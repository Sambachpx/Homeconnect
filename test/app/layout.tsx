import Link from "next/link";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex justify-between items-center px-4 py-2">
        <ul className="flex space-x-4">
          <li>
            <Link href={"/"}>Accueil</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/camera"}>Caméras Connectées</Link>
          </li>
        </ul>
        <form>
          <input
            type="text"
            placeholder="Rechercher..."
            className="border border-gray-300 px-2 py-1 rounded"
          />
        </form>
      </header>
      <main>{children}</main>
    </>
  );
}
