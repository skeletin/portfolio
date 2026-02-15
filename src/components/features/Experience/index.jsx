import { motion } from "motion/react";
import PageTitle from "../../ui/PageTitle";
import { IoLocationOutline, IoCalendarOutline } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";

// Helper function to format YYYY-MM date strings
const formatDate = (dateString) => {
  const [year, month] = dateString.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

// Calculate duration between two date strings
const getDuration = (startDate, endDate) => {
  const [sy, sm] = startDate.split("-").map(Number);
  const start = new Date(sy, sm - 1);
  const end =
    endDate === "Present"
      ? new Date()
      : new Date(...endDate.split("-").map((v, i) => (i === 1 ? v - 1 : +v)));
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (y === 0) return `${m} mo`;
  if (m === 0) return `${y} yr`;
  return `${y} yr ${m} mo`;
};

const experienceData = [
  {
    id: 0,
    company: "Self-Employed",
    role: "Freelance Developer",
    startDate: "2026-01",
    endDate: "Present",
    location: "Remote",
    description:
      "Delivering custom web solutions for diverse clients, specializing in full-stack development with React, Node.js, and Ruby on Rails. Architecting scalable applications, optimizing performance, and integrating third-party APIs to meet specific business needs. Providing end-to-end development services from technical consultation and UI/UX design to deployment and maintenance.",
    projects: [
      {
        name: "Portfolio & Brand Sites",
        team: "Design & Dev",
      },
    ],
  },
  {
    id: 1,
    company: "CVS Health",
    role: "Software Engineer",
    startDate: "2023-12",
    endDate: "2025-12",
    location: "Richardson, TX (Remote)",
    description:
      "Led development of an enterprise React accelerator used by 100+ developers. Built high-performance UIs with TypeScript, optimized performance through memoization and bundle optimization, and deployed applications using Azure-backed CI/CD pipelines. Worked on API Forge, an internal tool for deploying APIs, focusing on Governance and Enablement by managing API proxies and deploying to multiple cloud solutions including Apigee, Kong, and Azure API Management.",
    projects: [
      {
        name: "Developer Experience Platform (Internal)",
        team: "Accelerator Team",
      },
      {
        name: "API Forge - Governance & Enablement",
        team: "API Team",
      },
    ],
  },
  {
    id: 2,
    company: "G2",
    role: "Software Engineer",
    startDate: "2021-11",
    endDate: "2022-06",
    location: "Chicago, IL (Remote)",
    description:
      "Worked on G2's main web application built with Ruby on Rails and React. Developed responsive React interfaces and integrated RESTful APIs, optimized frontend performance across devices, and collaborated cross-functionally with product and design teams to deliver iterative features.",
    projects: [
      {
        name: "Customer-Facing Application",
        team: "Product Acceleration Team",
      },
    ],
  },
];

const Experience = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative flex flex-col z-1 w-full min-h-full px-4 md:px-8 lg:px-16 pt-6 md:pt-10 pb-8 md:pb-12"
    >
      <PageTitle className="mb-2">EXPERIENCE</PageTitle>
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-center orbitron text-[10px] md:text-xs tracking-[0.15em] uppercase text-ink/30"
      >
        Where I've worked and what I've built
      </motion.p>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="mt-4 mb-8 h-px w-32 mx-auto bg-linear-to-r from-transparent via-ink/15 to-transparent origin-center"
      />
      <div className="w-full max-w-5xl mx-auto pb-12 md:pb-16">
        <div className="relative">
          {/* ─── Animated Timeline Line ─── */}
          <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="w-full bg-linear-to-b from-ink/30 via-ink/15 to-transparent"
            />
          </div>

          <div className="flex flex-col gap-10">
            {experienceData.map((experience, index) => {
              const isPresent = experience.endDate === "Present";
              const duration = getDuration(
                experience.startDate,
                experience.endDate,
              );

              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.18,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="relative pl-16 md:pl-24"
                >
                  {/* ─── Timeline Dot ─── */}
                  <div className="absolute left-4 md:left-8 top-6 z-10">
                    <div className="relative">
                      {isPresent && (
                        <motion.div
                          className="absolute -inset-2 rounded-full bg-ink/15"
                          animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.4 + index * 0.18,
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                        className={`w-3.5 h-3.5 rounded-full border-2 border-page shadow-lg ${
                          isPresent ? "bg-ink" : "bg-ink/60"
                        }`}
                        style={{
                          filter: isPresent
                            ? "drop-shadow(0 0 6px rgba(var(--glow-rgb), 0.3))"
                            : undefined,
                        }}
                      />
                    </div>
                  </div>

                  {/* ─── Card ─── */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="relative rounded-xl border border-ink/8 bg-page/50 backdrop-blur-sm overflow-hidden group hover:border-ink/20 hover:bg-ink/5 hover:shadow-lg hover:shadow-ink/10 transition-[border-color,background-color,box-shadow] duration-300"
                  >
                    {/* Top accent line */}
                    <div
                      aria-hidden
                      className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-ink/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    <div className="p-5 md:p-7">
                      {/* ── Header ── */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="michroma text-lg md:text-xl text-ink leading-snug">
                            {experience.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1.5">
                            <FaBriefcase className="text-ink/40 text-xs shrink-0" />
                            <span className="orbitron text-xs text-ink/60 tracking-wide">
                              {experience.company}
                            </span>
                          </div>
                        </div>

                        {/* Present badge */}
                        {isPresent && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.18 }}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-ink/8 border border-ink/10 shrink-0"
                          >
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink/40" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-ink/70" />
                            </span>
                            <span className="orbitron text-[9px] text-ink/60 tracking-wider uppercase">
                              Current
                            </span>
                          </motion.div>
                        )}
                      </div>

                      {/* ── Meta pills ── */}
                      <div className="flex flex-wrap items-center gap-2 mb-5">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-ink/5 border border-ink/8">
                          <IoCalendarOutline className="text-ink/40 text-xs" />
                          <span className="orbitron text-[10px] text-ink/50 tracking-wide">
                            {formatDate(experience.startDate)} —{" "}
                            {isPresent
                              ? "Present"
                              : formatDate(experience.endDate)}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-ink/5 border border-ink/8">
                          <span className="orbitron text-[10px] text-ink/40 tracking-wide">
                            {duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-ink/5 border border-ink/8">
                          <IoLocationOutline className="text-ink/40 text-xs" />
                          <span className="orbitron text-[10px] text-ink/50 tracking-wide">
                            {experience.location}
                          </span>
                        </div>
                      </div>

                      {/* ── Divider ── */}
                      <div className="h-px w-full bg-linear-to-r from-transparent via-ink/10 to-transparent mb-5" />

                      {/* ── Description ── */}
                      <p className="text-ink-muted text-sm leading-relaxed mb-5">
                        {experience.description}
                      </p>

                      {/* ── Projects & Teams ── */}
                      <div>
                        <span className="orbitron text-[10px] tracking-[0.15em] uppercase text-ink/35 mb-2.5 block">
                          Projects & Teams
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {experience.projects.map(
                            (project, projectIndex) => (
                              <motion.div
                                key={projectIndex}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay:
                                    0.5 +
                                    index * 0.18 +
                                    projectIndex * 0.08,
                                }}
                                className="group/tag flex items-center gap-2 px-3 py-2 rounded-lg bg-ink/5 border border-ink/8 hover:border-ink/20 hover:bg-ink/8 transition-[color,background-color,border-color] duration-300"
                              >
                                <span className="text-sm text-ink/80 group-hover/tag:text-ink transition-colors duration-300">
                                  {project.name}
                                </span>
                                <span className="h-3 w-px bg-ink/15" />
                                <span className="orbitron text-[9px] text-ink/35 tracking-wider">
                                  {project.team}
                                </span>
                              </motion.div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Experience;
