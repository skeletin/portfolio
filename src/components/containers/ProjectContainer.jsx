import ProjectCard from "../cards/ProjectCard";

const ProjectContainer = ({ projects }) => {
  return (
    <div className="flex flex-col flex-1 space-y-10 w-full overflow-auto max-w-[50rem]">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectContainer;
