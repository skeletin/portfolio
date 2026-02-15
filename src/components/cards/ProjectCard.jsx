import { memo } from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import StackIcon from "tech-stack-icons";
import { useNavigate } from "react-router";

const ProjectCard = memo(({ project }) => {
  const navigate = useNavigate();

  const openProject = () => {
    navigate("/projects/" + project.name);
  };

  return (
    <div
      role="link"
      tabIndex={0}
      aria-label={`Open project ${project.name}`}
      onClick={openProject}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") openProject();
      }}
      className="relative h-56 rounded-xl w-full overflow-hidden text-ink border border-transparent group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 hover:border-ink/20 hover:shadow-lg hover:shadow-ink/10 transition-[border-color,box-shadow] duration-300"
    >
      {/* Image */}
      <img
        src={project.displayPictureUrl}
        alt={project.name}
        loading="lazy"
        decoding="async"
        className="object-cover h-full w-full transition-all duration-700 ease-in-out group-hover:blur-lg group-hover:scale-105 group-hover:brightness-50"
      />

      {/* ─── Default State: Bottom Info ─── */}
      <div className="absolute inset-x-0 bottom-0 z-10 transition-all duration-500 opacity-100 translate-y-0 group-hover:opacity-0 group-hover:translate-y-3 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-t from-page/85 via-page/50 to-transparent -top-12" />
        <div className="relative flex items-end justify-between gap-3 px-4 pb-4">
          <div className="flex flex-col gap-1 min-w-0">
            <h3 className="michroma text-sm text-ink truncate leading-tight">
              {project.name}
            </h3>
            <span className="orbitron text-[9px] text-ink/40 tracking-[0.15em] uppercase">
              {project.projectType} · {project.year}
            </span>
          </div>
        </div>
      </div>

      {/* ─── Hover State: Full Overlay ─── */}
      <div className="absolute inset-0 bg-linear-to-t from-page/90 via-page/60 to-page/30 opacity-0 group-hover:opacity-100 transition-opacity duration-600 z-10" />

      <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-600">
        <div className="flex flex-col h-full p-4 justify-between">
          {/* Top Row: Year + Links */}
          <div className="flex justify-between items-start">
            <span className="michroma text-xs text-ink/60 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-75">
              {project.year}
            </span>
            <div className="flex items-center gap-1.5 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-100">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center w-7 h-7 rounded-md bg-ink/10 backdrop-blur-sm border border-ink/15 text-ink/70 hover:text-ink hover:bg-ink/20 transition-all duration-300"
                >
                  <FaGithub className="text-xs" />
                </a>
              )}
              {project.siteUrl && (
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center w-7 h-7 rounded-md bg-ink/10 backdrop-blur-sm border border-ink/15 text-ink/70 hover:text-ink hover:bg-ink/20 transition-all duration-300"
                >
                  <CgWebsite className="text-xs" />
                </a>
              )}
            </div>
          </div>

          {/* Center: Project Name */}
          <div className="flex flex-col items-center gap-2 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
            <span className="text-xl michroma text-center text-ink leading-snug">
              {project.name}
            </span>
          </div>

          {/* Bottom: Tech Stack */}
          <div className="flex items-center gap-2 overflow-hidden transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-250">
            <span className="orbitron text-[9px] text-ink/35 tracking-wider uppercase shrink-0">
              Stack
            </span>
            <div className="h-px w-3 bg-ink/15 shrink-0" />
            <div className="flex items-center gap-2 overflow-x-auto overflow-y-hidden hide-scrollbar flex-1">
              {project.techStack?.map((tech, index) => (
                <span
                  key={tech}
                  className="w-5 h-5 shrink-0 opacity-0 group-hover:opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110"
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                >
                  <StackIcon name={tech} className="w-full h-full" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Shimmer Effect ─── */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-ink/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
