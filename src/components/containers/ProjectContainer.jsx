import ProjectCard from "../cards/ProjectCard";

const ProjectContainer = ({ projects }) => {
  return (
    <div className="flex flex-col space-y-10 w-full h-full max-w-[50rem]">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectContainer;
