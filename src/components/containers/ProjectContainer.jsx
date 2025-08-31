import ProjectCard from "../cards/ProjectCard";

const ProjectContainer = ({ projects }) => {
  return (
    <div className="flex flex-col flex-1 space-y-10">
      {projects.map((project, i) => (
        <ProjectCard project={project} key={i} />
      ))}
    </div>
  );
};

export default ProjectContainer;
