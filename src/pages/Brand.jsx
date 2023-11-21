import ParticleBg from "../components/ParticleBg";
import { X } from "react-bootstrap-icons";
import { useNavigate, Link } from "react-router-dom";

// imports for images / logos / design elements
import navLogo from "/img/logo-plus-text.svg";
import navLogoEffect from "/img/logo-plus-text-effect.svg";
import heroImage from "/img/squares-design.png";
import advert from "/img/crow-advert.webp";
import line from "/img/crow-line.png";

const Brand = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="karasu-main-container">
        <div className="karasu-close-x" onClick={() => navigate("/")}>
          <X />
        </div>

        <div className="effect">
          <ParticleBg />

          <div className="effect-content">
            <div id="karasu-logo-container" onClick={() => navigate("/")}>
              <img className="karasu-img" src={navLogo} alt="Karasu logo" />
              <img
                className="karasu-dodge"
                src={navLogoEffect}
                alt="Karasu logo"
              />
            </div>
            <div className="karasu-hero-image">
              <img src={heroImage} alt="digital artwork" />
            </div>

            <div className="commission-flexbox">
              <h4>Digital Art</h4>
              <p>|</p>
              <h4>Web Development</h4>

              <p>|</p>
              <h4>Graphic Design</h4>
            </div>

            <div className="karasu-second-image">
              <img src={advert} alt="Digital artwork advert" />
            </div>

            <div className="line-break">
              <img src={line} alt="line break design" />
            </div>
            <div className="website-soon-text">
              <Link to="/">
                <h3>Website Coming Soon !</h3>
                <h4>Under Development</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
