import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("projects.json")
      .then((res) => {
        setProjects(res.data.projects);
        const index = projects.findIndex((p) => p.id === parseInt(id, 10));
        setCurrentProjectIndex(index);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id, projects]);

  if (loading) {
    <>
      <p>Loading...</p>
    </>;
  }
  if (!projects.length || currentProjectIndex === -1) {
    return <p>Project not found</p>;
  }

  const project = projects[currentProjectIndex];

  const navigateToNextProject = () => {
    const nextIndex = (currentProjectIndex + 1) % projects.length;

    window.scrollTo(0, 0);
    navigate(`/project/${projects[nextIndex].id}`);
  };

  return (
    <>
      <div className="container">
        <h2
          className="project-big-text"
          data-aos="fade-in"
          data-aos-duration="900"
        >
          {project.header}
        </h2>
        <h3 className="title-text" data-aos="fade-in" data-aos-duration="900">
          {project.title}
        </h3>
        <h4
          className="subtitle-text"
          data-aos="fade-in"
          data-aos-duration="900"
        >
          Client
        </h4>
        <p
          className="paragraph-text"
          data-aos="fade-in"
          data-aos-duration="900"
        >
          {project.subtitle}
        </p>
        <h4
          className="subtitle-text"
          data-aos="fade-in"
          data-aos-duration="900"
        >
          My Role
        </h4>
        <p
          className="paragraph-text"
          data-aos="fade-in"
          data-aos-duration="900"
        >
          {project.role}
        </p>
        <h4
          className="subtitle-text"
          data-aos="fade-in"
          data-aos-duration="900"
        >
          Year
        </h4>
        <p
          className="paragraph-text"
          data-aos="fade-in"
          data-aos-duration="900"
        >
          {project.date}
        </p>
        <p
          className="project-paragraph"
          data-aos="fade-in"
          data-aos-duration="900"
        >
          {project.description}
        </p>

        {/* grid container */}
        <div id="projects-grid-container">
          <div
            className="project-grid-item"
            data-aos="fade-in"
            data-aos-duration="900"
          >
            <img src={project.imageOne} alt={project.title} />
          </div>
          <div
            className="project-grid-item"
            data-aos="fade-in"
            data-aos-duration="900"
          >
            <img src={project.imageTwo} alt={project.title} />
          </div>
          <div
            className="project-grid-item"
            data-aos="fade-in"
            data-aos-duration="900"
          >
            <img src={project.imageThree} alt={project.title} />
          </div>
        </div>
        <p
          className="project-paragraph"
          data-aos="fade-in"
          data-aos-duration="900"
        >
          {project.descriptionTwo}
        </p>
        <a
          className="live-project"
          data-aos="fade-in"
          data-aos-duration="900"
          href="https://summative4.vercel.app/#/"
          target="_blank"
        >
          <h3>{project.link}</h3>
        </a>

        <h4
          className="subtitle-text"
          data-aos="fade-in"
          data-aos-duration="900"
        >
          View More
        </h4>
        <h2
          className="cursor-project-big-text"
          onClick={navigateToNextProject}
          data-aos="fade-in"
          data-aos-duration="900"
        >
          Next Project
        </h2>
      </div>
    </>
  );
};

export default Project;
