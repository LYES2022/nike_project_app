import { Link } from "react-scroll";

import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

import { navLinks } from "../constants/Index";

{
  /* <Link spy={true} smooth={true} to="Home" activeClass="activeClass">
  <li onClick={clearBarsHandler}>Home</li>
</Link>; */
}
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute w-full z-10">
      <nav className="flex justify-between items-center flex-1 max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                spy={true}
                smooth={true}
                to={item.href}
                activeClass="activeClass"
              >
                <a
                  className="p-5 font-montserrat leading-normal text-lg text-state-gray"
                  href={item.href}
                >
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
