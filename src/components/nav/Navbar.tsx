import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white w-full">
      <nav className="flex items-center gap-8 p-2">
        <img src="https://placehold.co/80x30" alt="company logo"></img>
        <ul className="flex text-blue-500 font-bold gap-6">
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
