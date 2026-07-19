import { Link,NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");

    toast.success("Logged out successfully!");

    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
      <h1 className="text-2xl font-bold">
        <Link to="/">KALA</Link>
      </h1>

      <ul className="flex gap-6 items-center">

        <li>
          <Link className="hover:text-orange-200" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="hover:text-orange-200" to="/about">
            About
          </Link>
        </li>

        <li>
          <Link className="hover:text-orange-200" to="/products">
            Products
          </Link>
        </li>
       <li>
  <NavLink
    to="/ai-generator"
    className="hover:text-orange-200"
  >
    AI Generator
  </NavLink>
</li>
        {token ? (
          <li>
            <button
              onClick={handleLogout}
              className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold"
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link className="hover:text-orange-200" to="/login">
              Login
            </Link>
          </li>

        )}

      </ul>
    </nav>
  );
}

export default Navbar;