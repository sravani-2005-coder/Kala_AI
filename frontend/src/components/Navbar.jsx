import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">KALA</h1>

      <ul className="flex gap-6">
        <li><Link className="hover:text-orange-200" to="/">Home</Link></li>
        <li><Link className="hover:text-orange-200" to="/about">About</Link></li>
        <li><Link className="hover:text-orange-200" to="/products">Products</Link></li>
        <li><Link className="hover:text-orange-200" to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;