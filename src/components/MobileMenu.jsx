import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MobileMenu = ({ closeMethod }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div
        data-aos-delay="100"
        data-aos="fade-left"
        data-aos-duration="700"
        id="mobile-menu-container"
      >
        <div className="menu-content">
          <ul id="mobile-menu">
            {/* mobile nav links */}
            <li>
              <Link to="/" onClick={closeMethod}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/" onClick={closeMethod}>
                Projects
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={closeMethod}>
                About
              </Link>
            </li>

            <li>
              <Link to="/brand" onClick={closeMethod}>
                Brand
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={closeMethod}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
