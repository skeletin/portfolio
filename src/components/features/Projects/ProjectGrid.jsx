import ProjectCard from "../../cards/ProjectCard";
import { motion, AnimatePresence } from "motion/react";
import Skeletin from "../../svgs/Skeletin";

const ProjectGrid = ({ projects, activeType, onTypeChange }) => {
  const filterTypes = ["all", "personal", "professional"];

  return (
    <div className="flex flex-col w-full h-full gap-4 md:gap-6 md:flex-row">
      {/* ─── Mobile Filter Bar ─── */}
      <div className="flex md:hidden w-full shrink-0 gap-3 items-center justify-between px-4 py-3 border border-white/10 rounded-xl bg-black/50 backdrop-blur-md">
        <div className="relative">
          <select
            value={activeType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="appearance-none pl-4 pr-10 py-2 rounded-lg bg-white/5 border border-white/15 text-white orbitron text-xs tracking-wide focus:outline-none focus:border-white/30 transition-all"
          >
            <option value="all" className="bg-neutral-900 text-white">
              All Projects
            </option>
            <option value="personal" className="bg-neutral-900 text-white">
              Personal
            </option>
            <option value="professional" className="bg-neutral-900 text-white">
              Professional
            </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-white/40">
            <svg className="fill-current h-3.5 w-3.5" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <span className="orbitron text-[10px] text-white/30 tracking-wider">
          {projects.length} {projects.length === 1 ? "project" : "projects"}
        </span>
      </div>

      {/* ─── Desktop Sidebar ─── */}
      <div className="hidden md:flex flex-col w-56 shrink-0 h-full">
        <motion.aside
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full h-full rounded-2xl border border-white/10 bg-linear-to-b from-white/4 via-black/50 to-black/70 backdrop-blur-md overflow-hidden flex flex-col"
        >
          {/* Background gradient accents */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            {/* Top corner glow */}
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-[radial-gradient(circle,rgba(255,255,255,0.04)_0%,transparent_70%)]" />
            {/* Bottom subtle warmth */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
          </div>

          {/* Top accent line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-white/35 to-transparent"
          />

          {/* ── Filters Section ── */}
          <div className="p-5 pb-4">
            <span className="orbitron text-[10px] tracking-[0.2em] uppercase text-white/40">
              Filter by
            </span>

            <div className="flex flex-col gap-1 mt-3.5">
              {filterTypes.map((type) => {
                const isActive = activeType === type;
                const count =
                  type === "all"
                    ? projects.length
                    : projects.filter((p) => p.projectType === type).length;
                return (
                  <motion.button
                    key={type}
                    onClick={() => onTypeChange(type)}
                    whileTap={{ scale: 0.97 }}
                    className={`relative w-full text-left px-3.5 py-2.5 rounded-lg transition-all duration-300 orbitron text-xs tracking-wide flex items-center justify-between ${
                      isActive
                        ? "text-white"
                        : "text-white/35 hover:text-white/60 hover:bg-white/3"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterBg"
                        className="absolute inset-0 rounded-lg bg-linear-to-r from-white/10 to-white/5 border border-white/12 shadow-sm shadow-white/5"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10 capitalize">
                      {type === "all" ? "All" : type}
                    </span>
                    <span
                      className={`relative z-10 text-[9px] tabular-nums transition-colors duration-300 ${
                        isActive ? "text-white/50" : "text-white/20"
                      }`}
                    >
                      {count}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="mx-5 h-px bg-linear-to-r from-transparent via-white/12 to-transparent" />

          {/* ── Stats Section ── */}
          <div className="p-5 pt-4">
            <span className="orbitron text-[10px] tracking-[0.2em] uppercase text-white/40">
              Overview
            </span>

            <div className="mt-3.5 flex items-baseline gap-2">
              <motion.span
                key={`count-${projects.length}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="michroma text-3xl leading-none text-transparent bg-clip-text bg-linear-to-b from-white to-white/50"
              >
                {projects.length}
              </motion.span>
              <span className="orbitron text-[10px] text-white/25 tracking-wider">
                {projects.length === 1 ? "project" : "projects"}
              </span>
            </div>

            {/* Breakdown bars */}
            <div className="mt-5 flex flex-col gap-3">
              {["personal", "professional"].map((type) => {
                const count = projects.filter(
                  (p) => p.projectType === type,
                ).length;
                const pct =
                  projects.length > 0
                    ? Math.round((count / projects.length) * 100)
                    : 0;
                return (
                  <div key={type} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="orbitron text-[10px] text-white/30 capitalize tracking-wide">
                        {type}
                      </span>
                      <span className="orbitron text-[10px] text-white/20 tabular-nums">
                        {count}
                      </span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-linear-to-r from-white/25 to-white/10"
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{
                          duration: 0.8,
                          delay: 0.3,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="mx-5 h-px bg-linear-to-r from-transparent via-white/12 to-transparent" />

          {/* ── Year Range ── */}
          <div className="p-5 pt-4">
            <span className="orbitron text-[10px] tracking-[0.2em] uppercase text-white/40">
              Timeline
            </span>
            {projects.length > 0 && (
              <div className="mt-3.5 flex items-center gap-3">
                <span className="michroma text-sm text-transparent bg-clip-text bg-linear-to-r from-white/80 to-white/50">
                  {Math.min(...projects.map((p) => parseInt(p.year)))}
                </span>
                <div className="flex-1 h-px bg-linear-to-r from-white/20 via-white/8 to-white/20 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-linear-to-br from-white/50 to-white/20" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-linear-to-br from-white/50 to-white/20" />
                </div>
                <span className="michroma text-sm text-transparent bg-clip-text bg-linear-to-r from-white/50 to-white/80">
                  {Math.max(...projects.map((p) => parseInt(p.year)))}
                </span>
              </div>
            )}
          </div>

          {/* ── Spacer + Watermark ── */}
          <div className="flex-1 flex items-end justify-center pb-5 pointer-events-none select-none">
            <Skeletin className="w-16 h-16 opacity-[0.025]" />
          </div>

          {/* Bottom accent line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent"
          />
        </motion.aside>
      </div>

      {/* ─── Grid Area ─── */}
      <div className="flex-1 h-full overflow-y-auto pr-2 custom-scrollbar">
        <AnimatePresence mode="wait">
          {projects.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center h-full"
            >
              {/* Glass card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="relative flex flex-col justify-center items-center flex-1 h-full rounded-2xl border border-white/15 bg-white/5 backdrop-blur shadow-lg shadow-black/30 overflow-hidden px-10 py-10"
              >
                {/* Glass highlights */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                >
                  {/* Top edge shine */}
                  <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
                  {/* Inner refraction gradient */}
                  <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.06)_0%,transparent_50%)]" />
                  <div className="absolute -bottom-1/4 -right-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_70%_80%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
                  {/* Bottom edge subtle shine */}
                  <div className="absolute left-0 right-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* Mascot */}
                <div className="relative mb-6">
                  <motion.div
                    aria-hidden
                    className="absolute -inset-6 rounded-full bg-white/5 blur-2xl"
                    animate={{ opacity: [0.3, 0.55, 0.3] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <Skeletin className="relative w-12 h-12 opacity-20" />
                </div>

                {/* Text */}
                <motion.h3
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="michroma text-sm text-white/80 mb-2"
                >
                  No Projects Found
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="orbitron text-[10px] text-white/35 tracking-wider"
                >
                  Try selecting a different filter
                </motion.p>

                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                  className="mt-5 h-px w-20 bg-linear-to-r from-transparent via-white/20 to-transparent origin-center"
                />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key={activeType}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.05,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pb-20"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 24, scale: 0.97 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                    },
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}

              {/* Filler Cards */}
              {Array.from({ length: Math.max(0, 6 - projects.length) }).map(
                (_, index) => (
                  <motion.div
                    key={`empty-${index}`}
                    variants={{
                      hidden: { opacity: 0, scale: 0.95 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 0.4,
                          ease: "easeOut",
                        },
                      },
                    }}
                    className="hidden lg:block rounded-xl h-56  w-full bg-white/5 border border-white/5 backdrop-blur relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-30"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white/10">
                      <Skeletin className="w-12 h-12 md:w-16 md:h-16 opacity-20" />
                    </div>
                  </motion.div>
                ),
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectGrid;
