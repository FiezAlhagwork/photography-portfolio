import { Link } from "react-router-dom";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { navbar, socialMedia } from "../constant";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-White border-b border-gray-200 py-3 ">
      <div className="containers flex justify-between items-center  ">
        {/* navbar in mobile */}
        <ul className={`lg:flex items-center gap-3  hidden`}>
          {navbar.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={item.Link}
                  className=" hover:text-Yellow transition-colors duration-100 block font-Montserrat  "
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Logo */}
        <div className="lg:ml-20 flex justify-center items-center flex-col ">
          <h4 className="font-libre "> Abd Alahh</h4>
          <p className="text-[13px] text-Grey uppercase">street photography</p>
        </div>

        {/* socialMedia */}
        <ul className="hidden  lg:flex gap-4 items-center ">
          {socialMedia.map((item) => {
            return (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <li
                  className="w-10 h-10 border-2 border-Black flex justify-center items-center rounded-full hover:bg-Black hover:text-White transition-colors duration-200"
                  key={item.id}
                >
                  {item.icon}
                </li>
              </a>
            );
          })}
          <li>
            <Button className="text-White bg-Black">Let's Tailk</Button>
          </li>
        </ul>

        {/* navbar in mobile */}
        <ul
          className={`flex flex-col items-center justify-center lg:hidden  h-screen w-full bg-Grey opacity-100 px-5 pt-20  transition-all duration-300   ${
            isMenuOpen ? "block" : "hidden"
          } fixed  bottom-0 left-0  md:w-auto z-30`}
        >
          <button onClick={toggleMenu} className="absolute right-4 top-4 ">
            <IoMdClose size={40} className="text-White" />
          </button>
          {navbar.map((item) => {
            return (
              <li>
                <Link
                  key={item.id}
                  to={item.Link}
                  className=" hover:text-Yellow transition-colors duration-100 block text-White text-3xl font-libre font-medium py-3"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="lg:hidden" onClick={toggleMenu}>
          <button aria-label="Toggle Menu">
            <CiMenuBurger size={25} className="text-Black" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
