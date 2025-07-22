import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Img from "../../assets/logo.png";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [ticketDropdown, setTicketDropdown] = useState(false);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Tickets", link: "#", dropdown: true },
    { label: "Services", link: "/services" },
    { label: "About", link: "/about" },
    { label: "Login/SignUp", link: "/login" },
  ];

  const handleToggle = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll < scrollPosition || currentScroll < 50);
      setScrollPosition(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[8ch] lg:px-24 md:px-16 sm:px-7 px-4 
      bg-white shadow-xl transition-transform duration-300 z-50
      ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex items-center justify-between h-full">
        <Link to="/">
          <img src={Img} alt="logo" className="lg:h-30 h-16 w-auto" />
        </Link>

        <div className="md:hidden cursor-pointer" onClick={handleToggle}>
          {open ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
        </div>

        <div
          className={`absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-white
          md:flex items-center transition-all duration-300 md:translate-x-0 
          ${open ? "flex flex-col p-4 shadow-lg" : "hidden"}`}
        >
          <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-lg text-neutral-500">
            {navItems.map((item, ind) => (
              <li key={ind} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setTicketDropdown(!ticketDropdown)}
                      className="hover:text-red-500 ease-in-out duration-300"
                    >
                      {item.label}
                    </button>
                    {ticketDropdown && (
                      <ul className="absolute top-full left-0 lg:text-neutral-500 bg-red-500 z-50 text-white sm:bg-white shadow-md mt-2 rounded-md py-2 w-40">
                        <li>
                          <Link to="/show-tickets" className="block px-4 py-2 hover:bg-gray-100">Show Tickets</Link>
                        </li>
                        <li>
                          <Link to="/cancel-tickets" className="block px-4 py-2 hover:bg-gray-100">Cancel Tickets</Link>
                        </li>
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={item.link} className="hover:text-red-500 ease-in-out duration-300" onClick={handleClose}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
