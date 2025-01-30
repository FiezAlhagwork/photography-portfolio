const Footer = () => {
  return (
    <footer className="px-6 py-4 border-t border-Grey bg-Black flex justify-between items-center">
      <p className="font-Montserrat text-Grey font-extralight text-sm max-sm:text-xs">All rights reserved. 2025</p>
      <ul className=" flex gap-3 items-center">
        <li className=" text-Grey font-Montserrat text-sm max-sm:text-xs cursor-pointer font-light">
          <a href="">Privacy</a>
        </li>
        <li className=" text-Grey font-Montserrat text-sm max-sm:text-xs cursor-pointer font-light">
          <a href="">Cookies</a>
        </li>
        <li className=" text-Grey font-Montserrat text-sm max-sm:text-xs cursor-pointer font-light">
          <a href="">Terms</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
