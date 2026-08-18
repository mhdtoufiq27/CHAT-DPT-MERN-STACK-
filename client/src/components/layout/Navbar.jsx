import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold text-white"
        >
          <FaRobot className="text-emerald-500 text-3xl" />
          VEXIS PRO
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">

          <a href="#features" className="hover:text-white duration-300">
            Features
          </a>

          <a href="#about" className="hover:text-white duration-300">
            About
          </a>

          <a href="#contact" className="hover:text-white duration-300">
            Contact
          </a>

        </div>

        {/* Buttons */}
        <div className="flex gap-4">

          <Link
            to="/login"
            className="px-5 py-2 rounded-xl border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 duration-300 text-white"
          >
            Get Started
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;