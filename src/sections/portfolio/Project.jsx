import Card from "../../components/Card";

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="PortfolioProjectImage" />
      </div>
      <h4>{project.title}</h4>
      <p style={{ fontSize: "15px" }}>
        {`${project.desc.substring(0, 150)}`}{" "}
        <span
          style={{ fontSize: "10px", color: "blueviolet", cursor: "pointer" }}
        >
          ...Read More
        </span>
      </p>
      <div className="portfolio__project-cta">
        <a
          href={project.demo}
          className="btn sm"
          target="_blank"
          rel="noopner noreferrer"
        >
          Live
        </a>
        <a
          href={project.github}
          className="btn sm primary"
          target="_blank"
          rel="noopner noreferrer"
        >
          Github
        </a>
      </div>
    </Card>
  );
};

export default Project;
