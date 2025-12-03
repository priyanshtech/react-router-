import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    //navlink have an isactive attribute which tells us whether the link is active or not . we can use that to style the active link differently 
    <nav className="p-4 bg-gray-200 flex gap-6 text-lg">
        
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "font-bold border-b-2 border-black"
            : "hover:text-blue-600"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "font-bold border-b-2 border-black"
            : "hover:text-blue-600"
        }
      >
        About
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive
            ? "font-bold border-b-2 border-black"
            : "hover:text-blue-600"
        }
      >
        Projects
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "font-bold border-b-2 border-black"
            : "hover:text-blue-600"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}
