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
      className="contain-paint relative h-64 rounded-2xl w-full overflow-hidden text-ink group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 border border-ink/8 hover:border-ink/20 transition-[border-color,box-shadow] duration-500 hover:shadow-xl hover:shadow-ink/10"
    >
      {/* ─── Ambient glow ring (hover) ─── */}
      <div
        aria-hidden
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(var(--glow-rgb),0.12), transparent 40%, transparent 60%, rgba(var(--glow-rgb),0.08))",
        }}
      />

      {/* ─── Sharp image (fades out on hover) ─── */}
      <img
        src={project.displayPictureUrl}
        alt={project.name}
        loading="lazy"
        decoding="async"
        className="gpu-layer absolute inset-0 object-cover h-full w-full transition-opacity duration-500 ease-out group-hover:opacity-0"
      />

      {/* ─── Pre-blurred image (always rendered, fades in on hover) ─── */}
      <img
        src={project.displayPictureUrl}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="blur-ready absolute inset-0 object-cover h-full w-full opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
      />

      {/* ─── Top accent shine ─── */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-0 h-px z-30 bg-linear-to-r from-transparent via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* ─── Default State: Bottom Info ─── */}
      <div className="gpu-layer absolute inset-x-0 bottom-0 z-10 transition-[opacity,transform] duration-500 opacity-100 translate-y-0 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-t from-page/90 via-page/60 to-transparent -top-16" />
        <div className="relative flex items-end justify-between gap-3 px-5 pb-4">
          <div className="flex flex-col gap-1.5 min-w-0">
            <h3 className="michroma text-sm text-ink truncate leading-tight">
              {project.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="orbitron text-[9px] text-ink/40 tracking-[0.15em] uppercase">
                {project.projectType}
              </span>
              <span className="h-2.5 w-px bg-ink/15" />
              <span className="orbitron text-[9px] text-ink/35 tracking-wider">
                {project.year}
              </span>
            </div>
          </div>
          {/* Mini tech peek */}
          <div className="flex items-center gap-1 shrink-0">
            {project.techStack?.slice(0, 3).map((tech) => (
              <span key={tech} className="w-4 h-4 opacity-40">
                <StackIcon name={tech} className="w-full h-full" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Hover State: Full Overlay ─── */}
      <div className="absolute inset-0 bg-linear-to-t from-page/95 via-page/60 to-page/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      <div className="gpu-layer absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex flex-col h-full p-5 justify-between">
          {/* Top Row: Year + Links */}
          <div className="flex justify-between items-start">
            <div className="gpu-layer flex flex-col gap-1 -translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[opacity,transform] duration-400 delay-50">
              <span className="orbitron text-[9px] text-ink/35 tracking-[0.2em] uppercase">
                {project.projectType}
              </span>
              <span className="michroma text-xs text-ink/60">
                {project.year}
              </span>
            </div>
            <div className="gpu-layer flex items-center gap-1.5 -translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[opacity,transform] duration-400 delay-100">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center w-8 h-8 rounded-lg bg-ink/8 backdrop-blur-sm border border-ink/12 text-ink/60 hover:text-ink hover:bg-ink/15 hover:border-ink/25 transition-[color,background-color,border-color] duration-300"
                >
                  <FaGithub className="text-sm" />
                </a>
              )}
              {project.siteUrl && (
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center w-8 h-8 rounded-lg bg-ink/8 backdrop-blur-sm border border-ink/12 text-ink/60 hover:text-ink hover:bg-ink/15 hover:border-ink/25 transition-[color,background-color,border-color] duration-300"
                >
                  <CgWebsite className="text-sm" />
                </a>
              )}
            </div>
          </div>

          {/* Center: Project Name + Description */}
          <div className="gpu-layer flex flex-col items-center gap-2.5 px-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[opacity,transform] duration-500 delay-150">
            <span className="text-xl michroma text-center text-ink leading-snug tracking-wide">
              {project.name}
            </span>
            <p className="text-xs text-ink/45 text-center leading-relaxed line-clamp-2 max-w-[85%]">
              {project.description}
            </p>
          </div>

          {/* Bottom: Tech Stack */}
          <div className="gpu-layer flex items-center gap-2.5 overflow-hidden translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[opacity,transform] duration-500 delay-250">
            <span className="orbitron text-[8px] text-ink/30 tracking-[0.15em] uppercase shrink-0">
              Stack
            </span>
            <div className="h-px flex-1 bg-linear-to-r from-ink/15 via-ink/8 to-transparent" />
            <div className="flex items-center gap-2.5 overflow-x-auto overflow-y-hidden hide-scrollbar">
              {project.techStack?.map((tech, index) => (
                <span
                  key={tech}
                  className="w-5 h-5 shrink-0 opacity-0 group-hover:opacity-70 transition-opacity duration-300 hover:opacity-100"
                  style={{ transitionDelay: `${350 + index * 60}ms` }}
                >
                  <StackIcon name={tech} className="w-full h-full" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Shimmer Sweep ─── */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30 pointer-events-none overflow-hidden">
        <div className="gpu-layer absolute inset-0 bg-linear-to-r from-transparent via-ink/[0.07] to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1200 ease-out" />
      </div>

      {/* ─── Bottom edge glow ─── */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px z-30 bg-linear-to-r from-transparent via-ink/10 to-transparent"
      />
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
