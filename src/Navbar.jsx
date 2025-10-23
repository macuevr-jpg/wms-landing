import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation(); // подсветка активной страницы

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-center space-x-6">
        <Link
          to="/"
          className={`transition ${
            location.pathname === "/" ? "text-yellow-400 font-semibold" : "hover:text-yellow-400"
          }`}
        >
          Головна
        </Link>
        <Link
          to="/about"
          className={`transition ${
            location.pathname === "/about" ? "text-yellow-400 font-semibold" : "hover:text-yellow-400"
          }`}
        >
          Про компанію
        </Link>
      </div>
    </nav>
  );
}
