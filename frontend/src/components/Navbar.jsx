import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import toast from "react-hot-toast";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");

    toast.success("Logged out successfully!");

    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/">KALA</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">

          <li>
            <NavLink to="/" className="hover:text-orange-200">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="hover:text-orange-200">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" className="hover:text-orange-200">
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/ai-generator" className="hover:text-orange-200">
              AI Generator
            </NavLink>
          </li>

          {token && (
            <li>
              <NavLink to="/dashboard" className="hover:text-orange-200">
                Dashboard
              </NavLink>
            </li>
          )}

          {token ? (
            <li>
              <button
                onClick={handleLogout}
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold transition"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink to="/login" className="hover:text-orange-200">
                Login
              </NavLink>
            </li>
          )}

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 px-6 py-4">

          <div className="flex flex-col space-y-4">

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-200"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-200"
            >
              About
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-200"
            >
              Products
            </NavLink>

            <NavLink
              to="/ai-generator"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-200"
            >
              AI Generator
            </NavLink>

            {token && (
              <NavLink
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-200"
              >
                Dashboard
              </NavLink>
            )}

            {token ? (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
                className="bg-orange-500 hover:bg-orange-600 py-2 rounded-lg font-semibold"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-200"
              >
                Login
              </NavLink>
            )}

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;