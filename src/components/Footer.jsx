import { Instagram, Linkedin, Github } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div id="footer-container">
        {/* CONTACT */}
        <div id="contact-information-section" className="footer-sections">
          <h3 className="footer-titles">Contact</h3>
          <ul>
            <Link to="/contact">Contact Form</Link>
            <li>Email: karasudigitized@gmail.com</li>
            <li>
              <Link to="/brand">Karasu Digital</Link>
            </li>
          </ul>
        </div>
        {/* AVAILABILITY */}
        <div id="availability-section" className="footer-sections">
          <h3 className="footer-titles">Availability</h3>
          <ul>
            <li>
              <p id="availability-text">
                Currently freelancing and steadily building my brand's
                reputation. I'm open to exploring new opportunities. Let's
                connect and collaborate!
              </p>
            </li>
          </ul>
        </div>
        {/* SOCIAL MEDIA */}
        <div id="social-media-section" className="footer-sections">
          <h3 className="footer-titles">Socials</h3>
          <ul>
            <li className="cursor-pointer">
              <a href="https://twitter.com/KarasuDigital" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                </svg>
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href="https://www.instagram.com/karasu_digital/"
                target="_blank"
              >
                <Instagram />
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="https://github.com/ShannonColes" target="_blank">
                <Github />
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href="https://www.linkedin.com/in/shannon-coles-0725ba29b/"
                target="_blank"
              >
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>
        <div id="footer-trademark" className="paragraph-body-text">
          <p>© 2023 Shannon Coles</p>
          <p>Made by Karasu Digital</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
