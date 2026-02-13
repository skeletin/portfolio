import { motion } from "motion/react";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
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
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables.",
        );
      }

      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "skeletindev@gmail.com",
      });

      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setIsSubmitting(false);

      // Check for specific error types
      if (error.status === 412) {
        setSubmitStatus("auth_error");
      } else {
        setSubmitStatus("error");
      }

      // Clear error message after 5 seconds
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
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      url: "https://www.github.com/skeletin",
      icon: FaGithub,
      color: "hover:text-gray-400",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/skeletindev",
      icon: FaInstagram,
      color: "hover:text-pink-500",
    },
    {
      name: "Email",
      url: "mailto:skeletindev@gmail.com",
      icon: FaEnvelope,
      color: "hover:text-red-500",
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative z-1 flex flex-col w-full min-h-full px-4 md:px-8 lg:px-16 pt-6 md:pt-10 pb-8 md:pb-12"
    >
      <PageTitle className="mb-12">CONTACT</PageTitle>
      <div className="w-full max-w-4xl mx-auto pb-12 md:pb-16">
        {/* Title */}

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-page/50 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-ink/10 hover:border-ink/50 transition-all duration-300 shadow-lg hover:shadow-ink/20"
        >
          {/* Name and Title */}
          <div className="mb-8 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="michroma text-3xl md:text-4xl text-ink mb-2"
            >
              Julian Smith
            </motion.h3>
          </div>

          {/* Contact Information */}
          <div className="mb-10 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center gap-3"
            >
              <FaEnvelope className="text-xl text-ink/60" />
              <a
                href="mailto:skeletindev@gmail.com"
                className="text-lg md:text-xl text-ink hover:text-ink/80 transition-colors"
              >
                skeletindev@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg bg-ink/5 border border-ink/10 hover:border-ink/30 transition-all duration-300 ${social.color}`}
                >
                  <Icon className="text-3xl md:text-4xl text-ink transition-colors" />
                  <span className="michroma text-sm md:text-base text-ink/80">
                    {social.name}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-sm md:text-base">
              Let's connect and build.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 md:mt-12 bg-page/50 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-ink/10 hover:border-ink/50 transition-all duration-300 shadow-lg hover:shadow-ink/20"
        >
          <h3 className="michroma text-2xl md:text-3xl text-ink mb-6 text-center">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <label
                htmlFor="name"
                className="block text-sm md:text-base text-ink/80 mb-2 michroma"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-ink/5 border border-ink/10 rounded-lg text-ink placeholder-gray-500 hover:border-ink/30 hover:bg-ink/10 hover:shadow-lg hover:shadow-ink/20 focus:outline-none focus:border-ink/30 focus:bg-ink/10 focus:shadow-lg focus:shadow-ink/20 transition-all duration-300"
                placeholder="Your name"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <label
                htmlFor="email"
                className="block text-sm md:text-base text-ink/80 mb-2 michroma"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-ink/5 border border-ink/10 rounded-lg text-ink placeholder-gray-500 hover:border-ink/30 hover:bg-ink/10 hover:shadow-lg hover:shadow-ink/20 focus:outline-none focus:border-ink/30 focus:bg-ink/10 focus:shadow-lg focus:shadow-ink/20 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <label
                htmlFor="message"
                className="block text-sm md:text-base text-ink/80 mb-2 michroma"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-ink/5 border border-ink/10 rounded-lg text-ink placeholder-gray-500 hover:border-ink/30 hover:bg-ink/10 hover:shadow-lg hover:shadow-ink/20 focus:outline-none focus:border-ink/30 focus:bg-ink/10 focus:shadow-lg focus:shadow-ink/20 transition-all duration-300 resize-none"
                placeholder="Your message..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex flex-col items-center gap-4"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-ink/10 backdrop-blur-sm border-2 border-ink/30 rounded-lg text-ink michroma text-base md:text-lg hover:bg-ink/20 hover:border-ink/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-green-400 text-sm md:text-base"
                >
                  Message sent! I'll get back to you soon.
                </motion.p>
              )}
              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-red-400 text-sm md:text-base"
                >
                  Failed to send message. Please try again or contact me
                  directly.
                </motion.p>
              )}
              {submitStatus === "auth_error" && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-yellow-400 text-sm md:text-base"
                >
                  Email service configuration issue. Please contact me directly
                  at{" "}
                  <a
                    href="mailto:skeletindev@gmail.com"
                    className="underline hover:text-yellow-300"
                  >
                    skeletindev@gmail.com
                  </a>
                </motion.p>
              )}
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Contact;
