import { Link } from "react-router";
import { motion } from "motion/react";
import { IoArrowForward, IoCheckmark, IoClose } from "react-icons/io5";
import PageTitle from "../../ui/PageTitle";

const PACKAGES = [
  {
    name: "Landing page",
    price: "From $100",
    summary: "A focused one-page site to get your business online.",
    included: [
      "One mobile-friendly page",
      "Contact form",
      "Scoped revisions",
      "Launch-ready build",
      "Client portal access",
    ],
    notIncluded: ["Extra pages (quoted separately)", "Ongoing hosting (see below)"],
  },
  {
    name: "Hosting and care",
    price: "$25/mo",
    summary: "Keep your site live, secure, and maintained.",
    included: [
      "SSL and hosting",
      "Deploys and uptime",
      "Minor updates (~30 min/mo)",
      "I keep it running",
      "Client portal access",
    ],
    notIncluded: [
      "New pages or features (quoted separately)",
      "Major redesigns",
    ],
    featured: true,
  },
  {
    name: "Custom apps",
    price: "Quote",
    summary: "Portal-style apps, dashboards, and integrations built for your workflow.",
    included: [
      "Discovery and scoping",
      "Custom features and workflows",
      "Client portal access",
      "Ongoing support options",
    ],
    notIncluded: ["Fixed package pricing", "Off-the-shelf templates only"],
  },
];

const Services = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative flex flex-col z-1 w-full min-h-full px-4 md:px-8 lg:px-16 pt-6 md:pt-10 pb-8 md:pb-12"
    >
      <PageTitle className="mb-2">SERVICES</PageTitle>
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-center orbitron text-[10px] md:text-xs tracking-[0.15em] uppercase text-ink/30"
      >
        Simple sites for small businesses
      </motion.p>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="mt-4 mb-8 h-px w-32 mx-auto bg-linear-to-r from-transparent via-ink/15 to-transparent origin-center"
      />

      <div className="w-full max-w-5xl mx-auto pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`relative flex flex-col rounded-xl border bg-page/50 backdrop-blur-sm overflow-hidden transition-[border-color,background-color,box-shadow] duration-300 hover:shadow-lg hover:shadow-ink/10 ${
                pkg.featured
                  ? "border-ink/20 hover:border-ink/30 hover:bg-ink/5"
                  : "border-ink/8 hover:border-ink/20 hover:bg-ink/5"
              }`}
            >
              {pkg.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-ink/25 to-transparent" />
              )}
              <div className="flex flex-col flex-1 p-6 md:p-7">
                <div className="mb-5">
                  <h2 className="michroma text-lg text-ink">{pkg.name}</h2>
                  <p className="mt-2 orbitron text-2xl text-ink/80 tracking-wide">
                    {pkg.price}
                  </p>
                  <p className="mt-3 text-sm text-ink/50 leading-relaxed">
                    {pkg.summary}
                  </p>
                </div>

                <div className="space-y-4 flex-1">
                  <div>
                    <p className="orbitron text-[9px] tracking-[0.15em] uppercase text-ink/35 mb-2">
                      Included
                    </p>
                    <ul className="space-y-2">
                      {pkg.included.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-ink/65"
                        >
                          <IoCheckmark className="mt-0.5 shrink-0 text-ink/40" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="orbitron text-[9px] tracking-[0.15em] uppercase text-ink/35 mb-2">
                      Not included
                    </p>
                    <ul className="space-y-2">
                      {pkg.notIncluded.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-ink/40"
                        >
                          <IoClose className="mt-0.5 shrink-0 text-ink/25" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="group/cta mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-ink/15 bg-ink/8 px-4 py-2.5 michroma text-[10px] tracking-wider uppercase text-ink hover:border-ink/30 hover:bg-ink/12 transition-[color,background-color,border-color] duration-300"
                >
                  <span>Get in touch</span>
                  <IoArrowForward className="text-ink/50 group-hover/cta:text-ink group-hover/cta:translate-x-0.5 transition-all duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default Services;
