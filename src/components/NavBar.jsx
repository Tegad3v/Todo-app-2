import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import { NavLink } from "react-router";
import { useState } from "react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinks = [
    { link: "/", label: "home" },
    { link: "/about", label: "about" },
    { link: "/task", label: "task" },
  ];

  return (
    <>
      <nav className="bg-sky-950 min-h-20 text-white p-5 md:px-20">
        <div className="h-full w-full flex items-center justify-between">
          <h1 className="text-2xl capitalize">Todo App</h1>

          <ul className="hidden md:flex gap-5 capitalize">
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink to={item.link}>{item.label}</NavLink>
              </li>
            ))}
          </ul>

          <button
            className="text-2xl md:hidden"
            onClick={() => setIsNavOpen((i) => !i)}
          >
            {isNavOpen ? <RiCloseLargeFill /> : <RxHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isNavOpen && (
          <ul className="mt-5 flex flex-col gap-3 capitalize">
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink to={item.link}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}

export default Header;
