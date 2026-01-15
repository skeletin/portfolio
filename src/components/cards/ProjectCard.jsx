import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import StackIcon from "tech-stack-icons";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const openProject = () => {
    navigate("/projects/" + project.name);
  };

  return (
    <div className="relative rounded-xl h-[30rem] w-full overflow-hidden text-white group cursor-pointer">
      {/* Image */}
      <img
        src={project.displayPictureUrl}
        className="object-cover h-full w-full transition-all duration-700 ease-in-out group-hover:blur-xl group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

      {/* Overlay with Content */}
      <div
        role="link"
        tabIndex={0}
        aria-label={`Open project ${project.name}`}
        onClick={openProject}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") openProject();
        }}
        className="absolute inset-0 transition-all duration-700 opacity-0 group-hover:opacity-100 border-white/20 rounded-xl z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        <ProjectInformation {...project} />
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
      </div>
    </div>
  );
};

const ProjectInformation = ({ name, year, repoUrl, siteUrl, techStack }) => {
  return (
    <div className="flex flex-col h-full opacity-100 p-6 md:p-8 justify-between relative z-20">
      {/* Year Badge */}
      <div className="flex justify-between items-center">
        <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-md border border-white/20 transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          <span className="text-lg md:text-xl michroma text-white">{year}</span>
        </div>
        <div className="flex items-center gap-3 transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-2xl md:text-3xl text-white hover:text-white/80 hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>
          )}
          {siteUrl && (
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-2xl md:text-3xl text-white hover:text-white/80 hover:scale-110 transition-all duration-300"
            >
              <CgWebsite />
            </a>
          )}
        </div>
      </div>

      {/* Project Name */}
      <div className="flex justify-center transform translate-y-[20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
        <span className="text-3xl md:text-4xl michroma text-center drop-shadow-lg text-white">
          {name}
        </span>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 michroma overflow-hidden transform translate-y-[10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">
        <div className="text-sm md:text-base whitespace-nowrap">
          <span className="text-white font-medium">Tech</span>
        </div>
        <div className="relative flex items-center gap-3 overflow-x-auto overflow-y-hidden hide-scrollbar flex-1">
          {techStack.map((tech, index) => (
            <span
              key={tech}
              className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              style={{ transitionDelay: `${400 + index * 50}ms` }}
            >
              <StackIcon name={tech} className="w-full h-full" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
