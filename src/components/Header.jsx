import { useState, useEffect } from "react";
// import mobile menu
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [menuIsOpen, openMenu] = useState(false);
  const closeMobileMenu = () => {
    openMenu(false);
    if (!menuIsOpen) {
      document.getElementById("menu-button").classList.remove("active");
      document.getElementById("title-name").classList.remove("active");
      document.getElementById("title-occupation").classList.remove("active");
    } else {
      document.body.classList.toggle("no-scroll");
      document.getElementById("menu-button").classList.remove("active");
      document.getElementById("title-name").classList.remove("active");
      document.getElementById("title-occupation").classList.remove("active");
    }
  };

  const toggleMobileMenu = () => {
    openMenu(!menuIsOpen);
    //stops scrolling
    document.body.classList.toggle("no-scroll");
    document.getElementById("menu-button").classList.toggle("active");
    document.getElementById("title-name").classList.toggle("active");
    document.getElementById("title-occupation").classList.toggle("active");
  };

  return (
    <>
      {/* Hamburger Menu mobile / tablet */}
      <div id="top-nav">
        <div id="nav-title-logo">
          <Link to="/" onClick={closeMobileMenu}>
            <h3 id="title-name" data-aos="fade-down" data-aos-duration="900">
              Shannon Coles
            </h3>
            <h4
              id="title-occupation"
              data-aos="fade-down"
              data-aos-duration="900"
            >
              Digital Designer
            </h4>
          </Link>
        </div>

        <button
          id="menu-button"
          data-aos="fade-down"
          data-aos-duration="900"
          className="show-mobile-menu-button"
          onClick={toggleMobileMenu}
        >
          <Hamburger duration={0.3} toggled={menuIsOpen} toggle={openMenu} />
        </button>
      </div>
      <div id="top-nav-glass-layer"></div>

      {/* if menuIsOpen, show the mobile menu */}
      {/* give the mobile menu our close method as a prop */}
      {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
    </>
  );
};

export default Header;
