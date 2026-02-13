import ProjectCard from "../../cards/ProjectCard";
import { motion } from "motion/react";
import Skeletin from "../../svgs/Skeletin";

const ProjectGrid = ({ projects, activeType, onTypeChange }) => {
  return (
    <div className="flex flex-col w-full h-full gap-4 md:gap-6 md:flex-row p-1">
      {/* Mobile Filter & Stats */}
      <div className="flex md:hidden w-full shrink-0 gap-4 items-center justify-between p-4 border border-white/10 shadow-lg shadow-black/50 rounded-xl bg-black/40 backdrop-blur-md">
          <div className="relative">
            <select 
              value={activeType}
              onChange={(e) => onTypeChange(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2 rounded-lg bg-white/5 border border-white/20 text-white orbitron text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            >
              <option value="all" className="bg-neutral-900 text-white">All Projects</option>
              <option value="personal" className="bg-neutral-900 text-white">Personal</option>
              <option value="professional" className="bg-neutral-900 text-white">Professional</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/60">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          
          <div className="text-gray-400 text-xs michroma">
             Total: <span className="text-white text-sm">{projects.length}</span>
          </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 shrink-0 gap-4 h-full">
         <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full p-6 border border-white/10 shadow-lg shadow-black/50 rounded-xl bg-black/40 backdrop-blur-md"
         >
            <h3 className="text-xl text-white michroma mb-4 tracking-wider">Filters</h3>
            <div className="flex flex-col gap-3">
                {["all", "personal", "professional"].map((type) => (
                    <motion.button 
                        key={type}
                        onClick={() => onTypeChange(type)}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full text-left p-3 rounded-lg border transition-all duration-300 orbitron text-sm relative overflow-hidden group ${
                            activeType === type 
                            ? "border-gray-800/50 bg-gray-800/10 text-gray-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]" 
                            : "border-white/5 bg-white/5 text-gray-400 hover:text-white hover:border-white/20"
                        }`}
                    >
                        <span className="relative z-10 capitalize">
                            {type === "all" ? "All Projects" : type}
                        </span>
                        {/* Active Indicator Bar */}
                        {activeType === type && (
                            <motion.div 
                                layoutId="activeFilter"
                                className="absolute left-0 top-0 bottom-0 w-1 bg-gray-800"
                            />
                        )}
                    </motion.button>
                ))}
            </div>
         </motion.div>
         
         <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="w-full p-6 border border-white/10 shadow-lg shadow-black/50 rounded-xl bg-black/40 backdrop-blur-md flex-1 relative overflow-hidden group hover:border-white/20 transition-colors duration-300"
         >
            <div className="absolute inset-0 bg-linear-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-xl text-white michroma mb-4 tracking-wider relative z-10">Stats</h3>
            <div className="flex flex-col gap-1 relative z-10">
                <span className="text-gray-400 text-sm orbitron">Total Projects</span>
                <span className="text-4xl michroma text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">
                    {projects.length}
                </span>
            </div>
         </motion.div>
      </div>

      {/* Grid Area */}
      <div className="flex-1 h-full overflow-y-auto pr-2 custom-scrollbar">
        {projects.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[60vh] text-gray-400">
                <div className="text-6xl mb-4 opacity-20">
                    <svg className="w-24 h-24 fill-current" viewBox="0 0 24 24">
                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                        <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                </div>
                <h3 className="text-xl michroma text-white mb-2">No Projects Found</h3>
                <p className="text-sm orbitron opacity-60">Try adjusting your filters</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pb-20">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                
                {/* Filler Cards */}
                {Array.from({ length: Math.max(0, 6 - projects.length) }).map((_, index) => (
                    <div 
                        key={`empty-${index}`} 
                        className="hidden lg:block rounded-xl h-100 w-full bg-white/5 border border-white/5 backdrop-blur-sm relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-30"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white/10">
                          <Skeletin className="w-12 h-12 md:w-16 md:h-16 opacity-20" />
                        </div>
                    </div>
                ))}
            </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGrid;

// <div className="border-4 border-gray-600/10 shadow shadow-gray-200 rounded-2xl bg-neutral-800/10 backdrop-blur-[3px] h-40"></div>
