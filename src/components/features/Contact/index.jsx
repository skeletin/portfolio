import { motion } from "motion/react";
import { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import PageTitle from "../../ui/PageTitle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables.",
        );
      }

      emailjs.init(publicKey);

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "skeletindev@gmail.com",
      });

      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setIsSubmitting(false);

      if (error.status === 412) {
        setSubmitStatus("auth_error");
      } else {
        setSubmitStatus("error");
      }

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/julian-antonio-smith/",
      icon: FaLinkedin,
      accent: "group-hover/social:text-blue-400",
    },
    {
      name: "GitHub",
      url: "https://www.github.com/skeletin",
      icon: FaGithub,
      accent: "group-hover/social:text-ink/90",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/skeletindev",
      icon: FaInstagram,
      accent: "group-hover/social:text-pink-400",
    },
    {
      name: "Email",
      url: "mailto:skeletindev@gmail.com",
      icon: FaEnvelope,
      accent: "group-hover/social:text-ink/80",
    },
  ];

  const formFields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Your name",
      component: "input",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "your.email@example.com",
      component: "input",
    },
    {
      id: "message",
      label: "Message",
      type: "text",
      placeholder: "Your message...",
      component: "textarea",
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative flex flex-col z-1 w-full min-h-full px-4 md:px-8 lg:px-16 pt-6 md:pt-10 pb-8 md:pb-12"
    >
      <PageTitle className="mb-2">CONTACT</PageTitle>
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-center orbitron text-[10px] md:text-xs tracking-[0.15em] uppercase text-ink/30"
      >
        Let's connect and build something great
      </motion.p>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="mt-4 mb-8 h-px w-32 mx-auto bg-linear-to-r from-transparent via-ink/15 to-transparent origin-center"
      />

      <div className="w-full max-w-5xl mx-auto pb-12 md:pb-16">
        {/* ─── Two-column layout ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* ─── Left Column: Info ─── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Info card */}
            <div className="relative rounded-xl border border-ink/8 bg-page/50 backdrop-blur-sm overflow-hidden group hover:border-ink/20 hover:bg-ink/5 hover:shadow-lg hover:shadow-ink/10 transition-[border-color,background-color,box-shadow] duration-300">
              <div
                aria-hidden
                className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-ink/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="p-6 md:p-8">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="michroma text-2xl md:text-3xl text-ink mb-1"
                >
                  Julian Smith
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="orbitron text-[10px] tracking-[0.15em] uppercase text-ink/40 mb-5"
                >
                  Full-Stack Developer
                </motion.p>

                {/* Divider */}
                <div className="h-px w-full bg-linear-to-r from-transparent via-ink/10 to-transparent mb-5" />

                {/* Details */}
                <div className="space-y-3">
                  <motion.a
                    href="mailto:skeletindev@gmail.com"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="flex items-center gap-3 group/link"
                  >
                    <div className="w-8 h-8 rounded-lg bg-ink/5 border border-ink/8 flex items-center justify-center shrink-0 group-hover/link:border-ink/20 transition-colors duration-300">
                      <FaEnvelope className="text-ink/40 text-xs group-hover/link:text-ink/70 transition-colors duration-300" />
                    </div>
                    <span className="text-sm text-ink/60 group-hover/link:text-ink transition-colors duration-300 truncate">
                      skeletindev@gmail.com
                    </span>
                  </motion.a>
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.45 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-ink/5 border border-ink/8 flex items-center justify-center shrink-0">
                      <IoLocationOutline className="text-ink/40 text-xs" />
                    </div>
                    <span className="text-sm text-ink/60">Chicago, IL</span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div
              className="relative rounded-xl border border-ink/8 bg-page/50 backdrop-blur-sm overflow-hidden group hover:border-ink/20 hover:bg-ink/5 hover:shadow-lg hover:shadow-ink/10 transition-[border-color,background-color,box-shadow] duration-300"
            >
              <div
                aria-hidden
                className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-ink/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="p-6 md:p-8">
                <span className="orbitron text-[10px] tracking-[0.15em] uppercase text-ink/40 mb-4 block">
                  Connect
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.3 + index * 0.07,
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="group/social flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-ink/5 border border-ink/8 hover:border-ink/20 hover:bg-ink/8 transition-[color,background-color,border-color] duration-300"
                      >
                        <Icon
                          className={`text-lg text-ink/40 transition-colors duration-300 ${social.accent}`}
                        />
                        <span className="text-sm text-ink/60 group-hover/social:text-ink transition-colors duration-300">
                          {social.name}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="h-px w-16 bg-linear-to-r from-transparent via-ink/10 to-transparent origin-center lg:origin-left"
            />
          </motion.div>

          {/* ─── Right Column: Form ─── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-xl border border-ink/8 bg-page/50 backdrop-blur-sm overflow-hidden group hover:border-ink/20 hover:bg-ink/5 hover:shadow-lg hover:shadow-ink/10 transition-[border-color,background-color,box-shadow] duration-300 h-full">
              <div
                aria-hidden
                className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-ink/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-ink/5 border border-ink/8 flex items-center justify-center">
                    <FaPaperPlane className="text-ink/40 text-xs" />
                  </div>
                  <h3 className="michroma text-lg text-ink">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {formFields.map((field, index) => (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + index * 0.08,
                      }}
                    >
                      <label
                        htmlFor={field.id}
                        className="orbitron text-[10px] tracking-[0.12em] uppercase text-ink/40 mb-2 block"
                      >
                        {field.label}
                      </label>
                      {field.component === "textarea" ? (
                        <textarea
                          id={field.id}
                          name={field.id}
                          value={formData[field.id]}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-ink/4 border border-ink/8 rounded-xl text-ink text-sm placeholder-ink/20 hover:border-ink/20 focus:outline-none focus:border-ink/30 focus:bg-ink/6 focus:shadow-lg focus:shadow-ink/5 transition-[border-color,background-color,box-shadow] duration-300 resize-none"
                          placeholder={field.placeholder}
                        />
                      ) : (
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          value={formData[field.id]}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-ink/4 border border-ink/8 rounded-xl text-ink text-sm placeholder-ink/20 hover:border-ink/20 focus:outline-none focus:border-ink/30 focus:bg-ink/6 focus:shadow-lg focus:shadow-ink/5 transition-[border-color,background-color,box-shadow] duration-300"
                          placeholder={field.placeholder}
                        />
                      )}
                    </motion.div>
                  ))}

                  {/* Submit */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.55 }}
                    className="pt-1"
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full group/btn px-6 py-3.5 rounded-xl border border-ink/15 bg-ink/8 text-ink michroma text-xs tracking-wider uppercase overflow-hidden hover:border-ink/30 hover:bg-ink/12 transition-[color,background-color,border-color] duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {/* Shimmer on hover */}
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-linear-to-r from-transparent via-ink/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
                      />
                      <span className="relative flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="inline-block w-4 h-4 border border-ink/30 border-t-ink rounded-full"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="text-[10px] text-ink/50" />
                            Send Message
                          </>
                        )}
                      </span>
                    </motion.button>
                  </motion.div>

                  {/* Status messages */}
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center"
                    >
                      {submitStatus === "success" && (
                        <p className="text-green-400 text-sm">
                          Message sent! I'll get back to you soon.
                        </p>
                      )}
                      {submitStatus === "error" && (
                        <p className="text-red-400 text-sm">
                          Failed to send message. Please try again or contact me
                          directly.
                        </p>
                      )}
                      {submitStatus === "auth_error" && (
                        <p className="text-yellow-400 text-sm">
                          Email service issue. Please contact me directly at{" "}
                          <a
                            href="mailto:skeletindev@gmail.com"
                            className="underline hover:text-yellow-300"
                          >
                            skeletindev@gmail.com
                          </a>
                        </p>
                      )}
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;
