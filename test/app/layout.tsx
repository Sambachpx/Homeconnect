import Link from "next/link";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex flex-col items-center justify-between px-4 py-2 bg-gray-200">
        <form className="mb-4">
          <input
            type="text"
            placeholder="Rechercher..."
            className="border border-gray-400 px-2 py-1 rounded"
          />
        </form>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <div className="hover:text-blue-500 cursor-pointer">Accueil</div>
            </Link>
          </li>
          <li>
            <Link href="/ampoule">
              <div className="hover:text-blue-500 cursor-pointer">
                Ampoules connectées
              </div>
            </Link>
          </li>
          <li>
            <Link href="/prise">
              <div className="hover:text-blue-500 cursor-pointer">
                Prises Connectées
              </div>
            </Link>
          </li>
          <li>
            <Link href="/serrure">
              <div className="hover:text-blue-500 cursor-pointer">
                Serrures Connectées
              </div>
            </Link>
          </li>
          <li>
            <Link href="/camera">
              <div className="hover:text-blue-500 cursor-pointer">
                Caméras Connectées
              </div>
            </Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
    </>
  );
}
