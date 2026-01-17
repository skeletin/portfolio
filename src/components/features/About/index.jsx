import { useMemo, useState } from "react";
import { motion } from "motion/react";
import PageTitle from "../../ui/PageTitle";
import Skeletin from "../../svgs/Skeletin";
import { FaCode, FaPalette, FaBolt, FaHeart } from "react-icons/fa";

const About = () => {
  const [avatarOk, setAvatarOk] = useState(true);

  // Put your uploaded photo here:
  // Save the image as: client/public/images/about-avatar.jpg
  const avatarSrc = "/images/about-avatar.jpg";

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
        body: "I’m obsessed with mood—contrast, texture, typography, and motion that makes the experience feel alive.",
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
    []
  );

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative flex flex-col z-1 w-full flex-1 px-4 md:px-8 lg:px-16 pt-10"
    >
      <div className="w-full max-w-5xl mx-auto">
        <PageTitle className="mb-10">ABOUT</PageTitle>

        {/* Hero */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/55 backdrop-blur-md">
          <div
            aria-hidden
            className="absolute -inset-28 rounded-full bg-gradient-to-r from-white/10 via-cyan-400/10 to-fuchsia-400/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ opacity: 0.35 }}
          />

          <div className="relative p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                <motion.div
                  aria-hidden
                  className="absolute -inset-5 rounded-full bg-white/5 blur-xl"
                  animate={{ opacity: [0.2, 0.55, 0.2] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative">
                  {avatarOk ? (
                    <img
                      src={avatarSrc}
                      alt="Skeletin avatar"
                      className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover border border-white/15 bg-black/60"
                      style={{
                        filter: "drop-shadow(0 0 24px rgba(255,255,255,0.14))",
                      }}
                      onError={() => setAvatarOk(false)}
                    />
                  ) : (
                    <div
                      className="h-32 w-32 md:h-40 md:w-40 rounded-full border border-white/15 bg-black/60 flex items-center justify-center"
                      style={{
                        filter: "drop-shadow(0 0 24px rgba(255,255,255,0.14))",
                      }}
                      title="Add your photo at /client/public/images/about-avatar.jpg"
                    >
                      <Skeletin className="h-16 w-16 md:h-20 md:w-20 opacity-90" />
                    </div>
                  )}
                </div>
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="michroma text-sm tracking-widest text-white/60"
                >
                  SKELETIN
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15 }}
                  className="michroma text-2xl md:text-3xl lg:text-4xl text-white mt-3"
                >
                  Web Developer & Creative
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.22 }}
                  className="mt-5 text-white/80 leading-relaxed text-base md:text-lg"
                >
                  Welcome.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.29 }}
                  className="mt-5 text-white/80 leading-relaxed text-base md:text-lg"
                >
                  I’m a web developer and creative, merging technology with art
                  to build bold, immersive experiences that feel as good as they
                  look.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.35 }}
                  className="mt-3 text-white/65 leading-relaxed"
                >
                  I care about clean engineering, strong design, and subtle
                  motion that adds personality without getting in the way.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.55, delay: 0.42 }}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                >
                  <span className="text-white/80">Currently:</span> building
                  sleek, modern web experiences.
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-6 hover:border-white/30 hover:bg-white/5 hover:shadow-lg hover:shadow-white/20 transition"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="rounded-xl border border-white/10 bg-white/5 p-3"
                    style={{
                      filter: "drop-shadow(0 0 18px rgba(255,255,255,0.10))",
                    }}
                  >
                    <Icon className="text-white/85 text-xl" />
                  </div>
                  <div>
                    <div className="michroma text-base text-white">
                      {c.title}
                    </div>
                    <div className="mt-2 text-sm text-white/65 leading-relaxed">
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
