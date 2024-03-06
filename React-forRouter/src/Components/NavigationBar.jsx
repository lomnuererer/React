import React from "react";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

export default function NavigationBar() {
  return (
    <nav className="bg-purple-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:bg-purple-700 hover:text-white">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:bg-purple-700 hover:text-white">About</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:bg-purple-700 hover:text-white">Contact</Link>
        </li>
        <li>
          <Link to="/nuer" className="text-white hover:bg-purple-700 hover:text-white">Nuer</Link>
        </li>
      </ul>
    </nav>
  );
}
