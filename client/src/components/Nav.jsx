import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold ml-4 md:ml-20">DeepSoftNet</div>

      {/* Mobile Menu Button */}
      <div className="md:hidden mr-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row items-center md:space-x-6 p-4 md:p-0 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        <li>
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/" className="hover:text-gray-400">Menu</Link>
        </li>
        <li>
          <Link to="#" className="hover:text-gray-400">Make a Reservation</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-gray-400">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
