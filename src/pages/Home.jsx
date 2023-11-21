import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

// import images
import vector from "/img/shannon-vector.png";

const Home = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Aos.init();

    axios
      .get("/projects.json")
      .then((response) => {
        setProjects(response.data.projects);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div id="home-content-container" className="container">
        <div
          className="vector"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <img id="profile-pic" src={vector} alt="Shannon headshot" />
        </div>
        <div id="home-intro-section">
          <p
            className="home-subtitle"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            Shannon Coles
          </p>
          <h1 id="home-title" data-aos="fade-right" data-aos-duration="900">
            Digital Designer
          </h1>
          <p
            id="home-statement-text"
            className="paragraph-body-text"
            data-aos="fade-right"
            data-aos-duration="950"
          >
            As a versatile expert in Web Development, Graphic Design, and
            Digital Art, My skills and creativity blend to create captivating
            digital experiences that connect with your audience, enhancing your
            brand and driving success.
          </p>
          <p
            onClick={() => navigate("/about")}
            id="home-read-about-me"
            data-aos="fade-right"
            data-aos-duration="950"
          >
            Read About Me
          </p>
        </div>
        <div id="case-studies-section">
          <p
            className="home-subtitle"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            Case Studies
          </p>
          <h2
            id="home-case-studies-title"
            data-aos="fade-right"
            data-aos-duration="950"
          >
            Projects
          </h2>
          <div id="projects-grid-container">
            {projects.map((project) => (
              <Link key={project.id} to={`/project/${project.id}`}>
                <div
                  className="project-grid-item"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <p className="date-absolute">{project.date}</p>
                  <h3 className="title-absolute">{project.title}</h3>
                  <img src={project.image} alt={project.title} />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <h4 id="call-to-action">Looking for creative solutions?</h4>
        <h3 id="call-to-action-text" onClick={() => navigate("/contact")}>
          Let's collaborate
        </h3>
      </div>
    </>
  );
};

export default Home;

// {projects.length > 0 && (
//   <div key={projects[1].id} className="project-grid-item">
//     <p className="date-absolute">{projects[1].date}</p>
//     <h3 className="title-absolute">{projects[1].title}</h3>
//     <img src={projects[1].image} alt={projects[1].title} />
//   </div>
// )}
