import { useRef, useState, useCallback, memo } from "react";
import ProjectCard from "../../cards/ProjectCard";
import { motion, AnimatePresence } from "motion/react";
import Skeletin from "../../svgs/Skeletin";
import BlurEdge from "../../ui/BlurEdge";

const ProjectGrid = memo(({ projects, activeType, onTypeChange }) => {
  const filterTypes = ["all", "personal", "professional"];
  const scrollRef = useRef(null);
  const [scrolledFromTop, setScrolledFromTop] = useState(false);
  const rafId = useRef(null);

  const handleScroll = useCallback(() => {
    // Throttle with requestAnimationFrame — fire at most once per frame
    if (rafId.current) return;
    rafId.current = requestAnimationFrame(() => {
      if (scrollRef.current) {
        setScrolledFromTop(scrollRef.current.scrollTop > 2);
      }
      rafId.current = null;
    });
  }, []);

  return (
    <div className="flex flex-col w-full h-full gap-4 md:gap-6 md:flex-row">
      {/* ─── Mobile Filter Bar ─── */}
      <div className="flex md:hidden w-full shrink-0 flex-col gap-3 px-4 py-4 border border-ink/10 rounded-2xl bg-linear-to-b from-ink/4 via-page/50 to-page/70 backdrop-blur-md relative overflow-hidden">
        {/* Top accent line */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-ink/35 to-transparent"
        />

        {/* Header row */}
        <div className="flex items-center justify-between">
          <span className="orbitron text-[10px] tracking-[0.15em] uppercase text-ink/40">
            Filter by
          </span>
          <motion.span
            key={`mobile-count-${projects.length}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="orbitron text-[10px] text-ink/30 tracking-wider tabular-nums"
          >
            {projects.length} {projects.length === 1 ? "project" : "projects"}
          </motion.span>
        </div>

        {/* Filter pills */}
        <div className="flex gap-2">
          {filterTypes.map((type) => {
            const isActive = activeType === type;
            return (
              <motion.button
                key={type}
                onClick={() => onTypeChange(type)}
                whileTap={{ scale: 0.95 }}
                className={`relative flex-1 px-3 py-2 rounded-lg orbitron text-xs tracking-wide transition-colors duration-300 capitalize ${
                  isActive
                    ? "text-ink"
                    : "text-ink/35 hover:text-ink/60"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeMobileFilter"
                    className="absolute inset-0 rounded-lg bg-linear-to-r from-ink/10 to-ink/5 border border-ink/12 shadow-sm shadow-ink/5"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}
                <span className="relative z-10">
                  {type === "all" ? "All" : type}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Bottom accent line */}
        <div
          aria-hidden
          className="absolute left-0 right-0 bottom-0 h-px bg-linear-to-r from-transparent via-ink/15 to-transparent"
        />
      </div>

      {/* ─── Desktop Sidebar ─── */}
      <div className="hidden md:flex flex-col w-56 shrink-0 h-full">
        <motion.aside
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full h-full rounded-2xl border border-ink/10 bg-linear-to-b from-ink/4 via-page/50 to-page/70 backdrop-blur-md overflow-hidden flex flex-col"
        >
          {/* Background gradient accents */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            {/* Top corner glow */}
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-[radial-gradient(circle,rgba(var(--glow-rgb),0.04)_0%,transparent_70%)]" />
            {/* Bottom subtle warmth */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[radial-gradient(circle,rgba(var(--glow-rgb),0.02)_0%,transparent_70%)]" />
          </div>

          {/* Top accent line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-ink/35 to-transparent"
          />

          {/* ── Filters Section ── */}
          <div className="p-5 pb-4">
            <span className="orbitron text-[10px] tracking-[0.15em] uppercase text-ink/40">
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
                    className={`relative w-full text-left px-3.5 py-2.5 rounded-lg transition-[color,background-color] duration-300 orbitron text-xs tracking-wide flex items-center justify-between ${
                      isActive
                        ? "text-ink"
                        : "text-ink/35 hover:text-ink/60 hover:bg-ink/3"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterBg"
                        className="absolute inset-0 rounded-lg bg-linear-to-r from-ink/10 to-ink/5 border border-ink/12 shadow-sm shadow-ink/5"
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
                        isActive ? "text-ink/50" : "text-ink/20"
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
          <div className="mx-5 h-px bg-linear-to-r from-transparent via-ink/12 to-transparent" />

          {/* ── Stats Section ── */}
          <div className="p-5 pt-4">
            <span className="orbitron text-[10px] tracking-[0.15em] uppercase text-ink/40">
              Overview
            </span>

            <div className="mt-3.5 flex items-baseline gap-2">
              <motion.span
                key={`count-${projects.length}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="michroma text-3xl leading-none text-transparent bg-clip-text bg-linear-to-b from-ink to-ink/50"
              >
                {projects.length}
              </motion.span>
              <span className="orbitron text-[10px] text-ink/40 tracking-wider">
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
                      <span className="orbitron text-[10px] text-ink/45 capitalize tracking-wide">
                        {type}
                      </span>
                      <span className="orbitron text-[10px] text-ink/35 tabular-nums">
                        {count}
                      </span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-ink/10 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-linear-to-r from-ink/60 to-ink/35"
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
          <div className="mx-5 h-px bg-linear-to-r from-transparent via-ink/12 to-transparent" />

          {/* ── Year Range ── */}
          <div className="p-5 pt-4">
            <span className="orbitron text-[10px] tracking-[0.15em] uppercase text-ink/40">
              Timeline
            </span>
            {projects.length > 0 && (
              <div className="mt-3.5 flex items-center gap-3">
                <span className="michroma text-sm text-transparent bg-clip-text bg-linear-to-r from-ink/80 to-ink/50">
                  {Math.min(...projects.map((p) => parseInt(p.year)))}
                </span>
                <div className="flex-1 h-px bg-linear-to-r from-ink/20 via-ink/8 to-ink/20 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-linear-to-br from-ink/50 to-ink/20" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-linear-to-br from-ink/50 to-ink/20" />
                </div>
                <span className="michroma text-sm text-transparent bg-clip-text bg-linear-to-r from-ink/50 to-ink/80">
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
            className="absolute left-0 right-0 bottom-0 h-px bg-linear-to-r from-transparent via-ink/15 to-transparent"
          />
        </motion.aside>
      </div>

      {/* ─── Grid Area ─── */}
      <div className="relative flex-1 h-full">
        <BlurEdge
          edges="top"
          size={28}
          className={`transition-opacity duration-300 ${scrolledFromTop ? "opacity-100" : "opacity-0"}`}
        />
        <BlurEdge edges="bottom" size={28} />
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-y-auto h-full pr-2 custom-scrollbar"
        >
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
                className="relative flex flex-col justify-center items-center flex-1 h-full rounded-2xl border border-ink/10 bg-ink/3 backdrop-blur shadow-lg shadow-ink/5 overflow-hidden px-10 py-10"
              >
                {/* Glass highlights */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-ink/20 to-transparent" />
                  <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_30%_20%,rgba(var(--glow-rgb),0.04)_0%,transparent_50%)]" />
                  <div className="absolute -bottom-1/4 -right-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_70%_80%,rgba(var(--glow-rgb),0.02)_0%,transparent_50%)]" />
                  <div className="absolute left-0 right-0 bottom-0 h-px bg-linear-to-r from-transparent via-ink/8 to-transparent" />
                </div>

                {/* Mascot */}
                <div className="relative mb-6">
                  <motion.div
                    aria-hidden
                    className="absolute -inset-8 rounded-full bg-ink/5 blur-2xl"
                    animate={{ opacity: [0.2, 0.45, 0.2] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    animate={{ y: [0, -6, 0], rotate: [-1, 1, -1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Skeletin className="relative w-14 h-14 opacity-15" />
                  </motion.div>
                </div>

                {/* Text */}
                <motion.h3
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="michroma text-sm text-ink/70 mb-2"
                >
                  No Projects Found
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="orbitron text-[10px] text-ink/30 tracking-wider"
                >
                  Try selecting a different filter
                </motion.p>

                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                  className="mt-5 h-px w-24 bg-linear-to-r from-transparent via-ink/15 to-transparent origin-center"
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
                    staggerChildren: 0.07,
                    delayChildren: 0.08,
                  },
                },
              }}
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 pb-20 pt-1"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 28, scale: 0.96 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.55,
                        ease: [0.22, 0.61, 0.36, 1],
                      },
                    },
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}

              {/* Filler Cards — ghosted placeholders */}
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
                    className="hidden lg:flex rounded-2xl h-64 w-full border border-dashed border-ink/8 relative overflow-hidden items-center justify-center group hover:border-ink/15 transition-[border-color] duration-500"
                  >
                    {/* Subtle inner gradient */}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--glow-rgb),0.015)_0%,transparent_70%)] group-hover:opacity-100 opacity-50 transition-opacity duration-500"
                    />
                    <div className="flex flex-col items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Skeletin className="w-8 h-8 opacity-10" />
                      <span className="orbitron text-[9px] text-ink/15 tracking-[0.15em] uppercase">
                        Coming soon
                      </span>
                    </div>
                  </motion.div>
                ),
              )}
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </div>
  );
});

ProjectGrid.displayName = "ProjectGrid";

export default ProjectGrid;
