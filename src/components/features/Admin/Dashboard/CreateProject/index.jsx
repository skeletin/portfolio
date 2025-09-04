import ProjectForm from "./ProjectForm";

const CreateProject = () => {
  return (
    <div className="relative flex flex-col items-center h-full w-full text-gray-200 overflow-auto">
      <h1 className="text-xl michroma self-start">New Project</h1>
      <ProjectForm />
    </div>
  );
};

export default CreateProject;
