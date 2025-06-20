import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-blue-500 text-white w-full">
      <nav className="flex items-center gap-8 p-3">
        <img src="https://placehold.co/80x30" alt="company logo"></img>
        <ul className="flex font-medium gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Product
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
