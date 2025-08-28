import ProjectCard from "../cards/ProjectCard";

const ProjectContainer = ({ projects }) => {
  return (
    <div className="flex flex-col flex-1 space-y-10">
      {projects.map(() => (
        <ProjectCard />
      ))}
    </div>
  );
};

export default ProjectContainer;
