import Link from "next/link";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex flex-col items-center justify-between px-4 py-2 bg-steel-gray">
        <form className="mb-4">
          <input
            type="text"
            placeholder="Rechercher..."
            className="border border-gray-400 px-2 py-1 rounded-full"
          />
        </form>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <div className="text-white font-bold cursor-pointer hover:bg-opacity-25 hover:bg-white hover:rounded">
                Accueil
              </div>
            </Link>
          </li>
          <li>
            <Link href="/ampoule">
              <div className="text-white font-bold cursor-pointer hover:bg-opacity-25 hover:bg-white hover:rounded">
                Ampoules connectées
              </div>
            </Link>
          </li>
          <li>
            <Link href="/prise">
              <div className="text-white font-bold cursor-pointer hover:bg-opacity-25 hover:bg-white hover:rounded">
                Prises Connectées
              </div>
            </Link>
          </li>
          <li>
            <Link href="/serrure">
              <div className="text-white font-bold cursor-pointer hover:bg-opacity-25 hover:bg-white hover:rounded">
                Serrures Connectées
              </div>
            </Link>
          </li>
          <li>
            <Link href="/camera">
              <div className="text-white font-bold cursor-pointer hover:bg-opacity-25 hover:bg-white hover:rounded">
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
