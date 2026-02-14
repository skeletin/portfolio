import { useMemo, useState } from "react";
import { motion } from "motion/react";
import PageTitle from "../../ui/PageTitle";
import Skeletin from "../../svgs/Skeletin";
import { FaCode, FaPalette, FaBolt, FaHeart } from "react-icons/fa";

const About = () => {
  const [avatarOk, setAvatarOk] = useState(true);

  const avatarSrc = "/images/about-avatar.jpg";

  const stats = useMemo(
    () => [
      { label: "Years", value: "4+" },
      { label: "Companies", value: "3" },
      { label: "Projects", value: "10+" },
    ],
    [],
  );

  const cards = useMemo(
    () => [
      {
        icon: FaCode,
        title: "Engineering",
        body: "I like clean architecture, reliable UI state, and systems that scale without losing their soul.",
      },
      {
        icon: FaPalette,
        title: "Art direction",
        body: "I'm obsessed with mood—contrast, texture, typography, and motion that makes the experience feel alive.",
      },
      {
        icon: FaBolt,
        title: "Performance",
        body: "Fast is part of the aesthetic. I optimize so interactions feel instant and smooth across devices.",
      },
      {
        icon: FaHeart,
        title: "Craft",
        body: "I sweat details: spacing, rhythm, accessibility, and micro-interactions that feel intentional.",
      },
    ],
    [],
  );

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative flex flex-col z-1 w-full min-h-full px-4 md:px-8 lg:px-16 pt-6 md:pt-10 pb-8 md:pb-12"
    >
      <div className="w-full max-w-5xl mx-auto pb-12 md:pb-16">
        <PageTitle className="mb-2">ABOUT</PageTitle>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center orbitron text-[10px] md:text-xs tracking-[0.15em] uppercase text-ink/30"
        >
          A bit about me and what I do
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-4 mb-8 h-px w-32 mx-auto bg-linear-to-r from-transparent via-ink/15 to-transparent origin-center"
        />

        {/* ─── Hero ─── */}
          <div className="relative rounded-xl border border-ink/8 bg-page/50 backdrop-blur-sm overflow-hidden group hover:border-ink/20 hover:bg-ink/5 hover:shadow-lg hover:shadow-ink/10 transition-[border-color,background-color,box-shadow] duration-300">
            {/* Background glow */}
            <div
              aria-hidden
              className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(var(--glow-rgb),0.06)_0%,transparent_70%)]"
            />
            <div
              aria-hidden
              className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-ink/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <div className="relative p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="relative"
                >
                  {/* Rotating ring */}
                  <motion.div
                    aria-hidden
                    className="absolute -inset-3 rounded-full"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0%, rgba(var(--glow-rgb), 0.12) 25%, transparent 50%, rgba(var(--glow-rgb), 0.08) 75%, transparent 100%)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  {/* Pulse */}
                  <motion.div
                    aria-hidden
                    className="absolute -inset-4 rounded-full bg-ink/5 blur-lg"
                    animate={{ opacity: [0.15, 0.4, 0.15] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative">
                    {avatarOk ? (
                      <img
                        src={avatarSrc}
                        alt="Skeletin avatar"
                        className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover border border-ink/15 bg-page/60"
                        style={{
                          filter:
                            "drop-shadow(0 0 24px rgba(var(--glow-rgb),0.14))",
                        }}
                        onError={() => setAvatarOk(false)}
                      />
                    ) : (
                      <div
                        className="h-32 w-32 md:h-40 md:w-40 rounded-full border border-ink/15 bg-page/60 flex items-center justify-center"
                        style={{
                          filter:
                            "drop-shadow(0 0 24px rgba(var(--glow-rgb),0.14))",
                        }}
                        title="Add your photo at /client/public/images/about-avatar.jpg"
                      >
                        <Skeletin className="h-16 w-16 md:h-20 md:w-20 opacity-90" />
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Bio */}
                <div className="flex-1 text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="orbitron text-[10px] tracking-[0.15em] uppercase text-ink/40"
                  >
                    SKELETIN
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                    className="michroma text-2xl md:text-3xl lg:text-4xl text-ink mt-3"
                  >
                    Software Engineer & Creative
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.22 }}
                    className="mt-5 text-ink/80 leading-relaxed text-base md:text-lg"
                  >
                    Welcome.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.29 }}
                    className="mt-5 text-ink/80 leading-relaxed text-base md:text-lg"
                  >
                    I enjoy merging technology with art to build immersive
                    experiences.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.35 }}
                    className="mt-3 text-ink/65 leading-relaxed"
                  >
                    Ever since I transitioned to the tech space as a software
                    engineer, I have not looked back. I love what I do.
                  </motion.p>

                  {/* Currently badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.42 }}
                    className="mt-6 inline-flex items-center gap-2.5 rounded-xl border border-ink/10 bg-ink/5 px-4 py-2.5"
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink/40" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-ink/70" />
                    </span>
                    <span className="orbitron text-[10px] tracking-wider text-ink/50">
                      <span className="text-ink/70">Currently:</span> building
                      sleek, modern web experiences
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

        {/* ─── Stats Row ─── */}
        <div className="mt-8 grid grid-cols-3 gap-3 md:gap-4">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.45 + idx * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative rounded-xl border border-ink/8 bg-page/50 backdrop-blur-sm p-3 md:p-4 text-center group hover:border-ink/20 hover:bg-ink/5 hover:shadow-lg hover:shadow-ink/10 transition-[border-color,background-color,box-shadow] duration-300 overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-ink/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="michroma text-xl md:text-2xl text-ink">
                {s.value}
              </div>
              <div className="orbitron text-[8px] md:text-[9px] tracking-[0.15em] uppercase text-ink/35 mt-1">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Section divider ─── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="mt-10 mb-2 h-px bg-linear-to-r from-transparent via-ink/10 to-transparent origin-center"
        />

        {/* ─── Section label ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mb-5 text-center"
        >
          <span className="orbitron text-[10px] tracking-[0.15em] uppercase text-ink/40">
            What I bring
          </span>
        </motion.div>

        {/* ─── Cards ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.65 + idx * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative rounded-xl border border-ink/8 bg-page/50 backdrop-blur-sm p-6 hover:border-ink/20 hover:bg-ink/5 hover:shadow-lg hover:shadow-ink/10 transition-[border-color,background-color,box-shadow] duration-300 overflow-hidden"
              >
                {/* Top accent */}
                <div
                  aria-hidden
                  className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-ink/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-xl border border-ink/10 bg-ink/5 p-3 group-hover:border-ink/20 group-hover:bg-ink/8 transition-[border-color,background-color] duration-300 shrink-0"
                    style={{
                      filter:
                        "drop-shadow(0 0 18px rgba(var(--glow-rgb),0.08))",
                    }}
                  >
                    <Icon className="text-ink/60 text-lg group-hover:text-ink/85 transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <div className="michroma text-base text-ink mb-1.5">
                      {c.title}
                    </div>
                    <div className="text-sm text-ink/55 leading-relaxed group-hover:text-ink/70 transition-colors duration-300">
                      {c.body}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.main>
  );
};

export default About;
