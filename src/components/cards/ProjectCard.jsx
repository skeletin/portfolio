import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import StackIcon from "tech-stack-icons";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative rounded-xl h-[30rem] overflow-hidden group">
      {/* Image */}
      <img
        src={project.displayPictureUrl}
        className="object-cover h-full w-full transition duration-1000 ease-in-out group-hover:blur-xl"
      />

      {/* Overlay */}
      <button className="absolute inset-0 transition duration-1000 opacity-0 bg-gray-900/50 group-hover:opacity-100 border-gray-900 rounded-xl">
        <ProjectInformation {...project} />
      </button>
    </div>
  );
};

const ProjectInformation = ({ name, year, repoUrl, siteUrl, techStack }) => {
  return (
    <div className="flex flex-col h-full opacity-100 transition duration-1000 p-8 justify-between">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-xl michroma">{year}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-3xl hover:scale-110  transition-all">
            <a href={repoUrl}>
              <FaGithub />
            </a>
          </span>
          <span className="text-3xl hover:scale-110  transition-all">
            <a href={siteUrl}>
              <CgWebsite />
            </a>
          </span>
        </div>
      </div>
      <div className="flex justify-center text-4xl michroma">{name}</div>
      <div className="flex items-center space-x-4 michroma overflow-hidden">
        <div className="">
          <span>Tech</span>
        </div>
        <div className="relative flex items-center space-x-3 overflow-x-auto overflow-y-hidden hide-scrollbar">
          {techStack.map((tech) => (
            <>
              <span key={tech} className="w-10 h-10">
                <StackIcon name={tech} className="w-10 h-10" />
              </span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
