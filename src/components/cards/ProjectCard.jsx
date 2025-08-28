import { FaGithub } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="relative rounded-xl h-[30rem] overflow-hidden group">
      {/* Image */}
      <img
        src="images/mastermind.png"
        className="object-cover h-full w-full transition duration-1000 ease-in-out group-hover:blur-xl"
      />

      {/* Overlay */}
      <button className="absolute inset-0 transition duration-1000 opacity-0 bg-gray-900/50 group-hover:opacity-100 border-gray-900 group-hover:border-2 rounded-xl">
        <ProjectInformation />
      </button>
    </div>
  );
};

const ProjectInformation = () => {
  return (
    <div className="flex flex-col h-full opacity-100 transition duration-1000 p-8 justify-between">
      <div className="flex justify-between items-center">
        <span className="text-xl michroma">2012</span>
        <span className="text-3xl">
          <FaGithub />
        </span>
      </div>
      <div className="flex justify-center text-4xl michroma">Mastermind</div>
      <div className="flex justify-between michroma">Stack</div>
    </div>
  );
};

export default ProjectCard;
