import Link from "next/link";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="flex flex-col min-h-screen">
        <header className="flex flex-col items-center justify-between px-4 py-2 bg-steel-gray">
          <div className="flex items-center justify-between w-full mb-4">
            <form className="flex-grow flex justify-center mr-4">
              <input
                type="text"
                placeholder="Rechercher..."
                className="border border-gray-400 px-2 py-1 rounded-full"
              />
            </form>
            <div className="flex space-x-2">
              <div className="bg-white text-steel-gray hover:bg-opacity-25 hover:bg-white rounded-full px-4 py-2 cursor-pointer">
                <Link href="/Connexion">Connexion</Link>
              </div>
              <div className="bg-white text-steel-gray hover:bg-opacity-25 hover:bg-white rounded-full px-4 py-2 cursor-pointer">
                <Link href="/Inscription">Inscription</Link>
              </div>
            </div>
          </div>
          <ul className="flex space-x-4">
            <li>
              <div className="text-white font-bold cursor-pointer hover:bg-opacity-25 hover:bg-white hover:rounded">
                <Link href="/">Accueil</Link>
              </div>
            </li>
            <li>
              <div className="text-white font-bold cursor-pointer hover:bg-opacity-25 hover:bg-white hover:rounded">
                <Link href="/Ampoules">Ampoules connectées</Link>
              </div>
            </li>
            <li>
              <div className="text-white font-bold cursor-pointer hover:bg-opacity-25 hover:bg-white hover:rounded">
                <Link href="/Prises">Prises Connectées</Link>
              </div>
            </li>
            <li>
              <div className="text-white font-bold cursor-pointer hover:bg-opacity-25 hover:bg-white hover:rounded">
                <Link href="/Serrures">Serrures Connectées</Link>
              </div>
            </li>
            <li>
              <div className="text-white font-bold cursor-pointer hover:bg-opacity-25 hover:bg-white hover:rounded">
                <Link href="/Cameras">Caméras Connectées</Link>
              </div>
            </li>
          </ul>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-steel-gray px-4 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
                <h3 className="text-white font-bold mb-2">Liens utiles</h3>
                <ul>
                  <li>
                    <div className="text-white hover:text-white cursor-pointer">
                      <Link href="/Contact">Contact</Link>
                    </div>
                  </li>
                  <li>
                    <div className="text-white hover:text-white cursor-pointer">
                      <Link href="/Mentionslegales">Mentions légales</Link>
                    </div>
                  </li>
                  <li>
                    <div className="text-white hover:text-white cursor-pointer">
                      <Link href="/Confidentialite">
                        Politique de confidentialité
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
                <h3 className="text-white font-bold mb-2">Réseaux sociaux</h3>
                <ul>
                  <li>
                    <a
                      href="https://facebook.com"
                      className="text-white hover:text-white"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      className="text-white hover:text-white"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      className="text-white hover:text-white"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
