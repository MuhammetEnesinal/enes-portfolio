import { useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../../assets/profile.jpeg";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 left-0 z-50 border-b border-gray-700 shadow">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://api.iconify.design/mdi/code-tags.svg"
            className="h-8 invert"
            alt="Logo"
          />
          <h1 className="text-xl font-semibold">
            Muhammet Enes İnal | Computer Engineer
          </h1>
        </Link>

        <ul className="hidden md:flex space-x-10 text-lg">
          <li>
            <Link to="/" className="hover:text-blue-400">
              Anasayfa
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400">
              Hakkımda
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-400">
              Projeler
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400">
              İletişim
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="rounded-full focus:ring-4 focus:ring-gray-600"
            >
              <img
                src={profileImage}
                className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-md hover:scale-105 transition"
                alt="profile"
              />
            </button>

            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-gray-900 border border-gray-700 rounded-xl shadow-xl p-3">
                <div className="px-2 py-2 border-b border-gray-700">
                  <p className="font-semibold whitespace-nowrap truncate w-full">
                    Muhammet Enes İnal
                  </p>
                  <p className="text-gray-400 text-xs whitespace-nowrap truncate w-full">
                    m.enesinal@gmail.com
                  </p>
                </div>

                <a
                  href="https://github.com/MuhammetEnesinal"
                  target="_blank"
                  className="block px-3 py-2 rounded hover:bg-gray-800 transition"
                >
                  GitHub Profilim
                </a>

                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded hover:bg-gray-800 transition"
                >
                  İletişime Geç
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
          >
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-gray-900 border-t border-gray-700 ${
          isNavOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center text-center p-4 space-y-3 text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-blue-400"
              onClick={() => setIsNavOpen(false)}
            >
              Anasayfa
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-400"
              onClick={() => setIsNavOpen(false)}
            >
              Hakkımda
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-blue-400"
              onClick={() => setIsNavOpen(false)}
            >
              Projeler
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-400"
              onClick={() => setIsNavOpen(false)}
            >
              İletişim
            </Link>
          </li>

          <div className="pt-4 flex flex-col items-center">
            <img
              src={profileImage}
              className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-md"
              alt="profile"
            />
            <span className="text-gray-300 text-sm mt-2">
              Muhammet Enes İnal
            </span>
          </div>
        </ul>
      </div>
    </nav>
  );
}
