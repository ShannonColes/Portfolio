import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [about, setAbout] = useState([]);

  useEffect(() => {
    axios
      .get("/about.json")
      .then((response) => {
        setAbout(response.data.about);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container">
        {about.map((about) => (
          <div key={about.id}>
            <h2 className="about-title-text">{about.header}</h2>
            <p className="about-project-paragraph">{about.descriptionOne}</p>
            <p className="about-project-paragraph">{about.descriptionTwo}</p>
            <h3 className="title-text">Services</h3>
            <p className="about-project-paragraph">{about.services}</p>
            <h3 className="title-text">Tools / Applications</h3>
            {about.programs.map((program) => (
              <p className="about-project-paragraph" key={program.id}>
                {program.application}
              </p>
            ))}

            <p className="project-paragraph">{about.descriptionThree}</p>
          </div>
        ))}
        <div>
          <h4 id="call-to-action">Looking for creative solutions?</h4>
          <h3 id="call-to-action-text" onClick={() => navigate("/contact")}>
            Let's collaborate
          </h3>
        </div>
      </div>
    </>
  );
};

export default About;
