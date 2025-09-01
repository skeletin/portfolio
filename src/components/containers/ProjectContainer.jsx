import ProjectCard from "../cards/ProjectCard";

const ProjectContainer = ({ projects }) => {
  console.log(projects);
  return (
    <div className="flex flex-col flex-1 space-y-10">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectContainer;
