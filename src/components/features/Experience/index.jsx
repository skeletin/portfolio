import { motion } from "motion/react";
import PageTitle from "../../ui/PageTitle";

// Helper function to format YYYY-MM date strings
const formatDate = (dateString) => {
  const [year, month] = dateString.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

const experienceData = [
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
      className="flex flex-col z-1 w-full min-h-full max-w-[60rem] px-4 md:px-8 lg:px-16 pt-6 md:pt-10 pb-10"
    >
      <PageTitle className="mb-8">EXPERIENCE</PageTitle>
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative space-y-12 pb-8">
          {/* Vertical timeline line - extends to cover all dots including the last one */}
          <div className="absolute left-8 md:left-12 top-0 h-[calc(100%+1rem)] w-0.5 bg-white opacity-60"></div>
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-20 md:pl-24"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-10 top-2 w-4 h-4 rounded-full bg-white border-2 border-gray-900 shadow-lg z-10"></div>

              {/* Content card (no backdrop-blur; smoother on scroll) */}
              <div className="bg-black/70 rounded-lg p-6 border border-gray-800/60 hover:border-white/50 transition-colors duration-300 shadow-lg">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="michroma text-xl md:text-2xl text-white mb-1">
                    {experience.role}
                  </h3>
                  <p className="text-lg text-white font-semibold mb-1">
                    {experience.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                    <span>{formatDate(experience.startDate)}</span>
                    <span>—</span>
                    <span>
                      {experience.endDate === "Present"
                        ? "Present"
                        : formatDate(experience.endDate)}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span>{experience.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                {/* Projects/Teams */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
                    Projects & Teams
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.projects.map((project, projectIndex) => (
                      <div
                        key={projectIndex}
                        className="bg-gray-800/50 border border-gray-700/60 rounded-md px-3 py-2 text-sm"
                      >
                        <span className="text-white font-medium">
                          {project.name}
                        </span>
                        <span className="text-gray-500 mx-2">•</span>
                        <span className="text-gray-400">{project.team}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default Experience;
