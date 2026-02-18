import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <div className="relative">
      {/* HERO SECTION */}
      <motion.section
        className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0b1a] via-[#12132a] to-[#0a0b1a]"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide"
            style={{ color: '#ffffff', opacity: 1 }}
            variants={fadeInUp}
          >
            GET IN TOUCH
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#e2e8f0', opacity: 0.95 }}
            variants={fadeInUp}
          >
            Have a question, feedback, or a game idea? We'd love to hear from you.
          </motion.p>
        </div>
      </motion.section>

      {/* CONTACT FORM SECTION */}
      <section className="py-20 bg-[#0a0b1a]">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* LEFT COLUMN - Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2
                className="text-3xl md:text-4xl font-bold mb-8"
                style={{ color: '#ffffff', opacity: 1 }}
              >
                CONTACT INFO
              </h2>

              {/* Email */}
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-[#e84545] text-2xl mt-1 flex-shrink-0" />
                <div>
                  <p
                    className="text-sm uppercase tracking-wider mb-1"
                    style={{ color: '#94a3b8', opacity: 0.8 }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:info@asabigames.com"
                    className="text-lg md:text-xl hover:text-[#e84545] transition-colors duration-200"
                    style={{ color: '#e2e8f0', opacity: 1 }}
                  >
                    info@asabigames.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#e84545] text-2xl mt-1 flex-shrink-0" />
                <div>
                  <p
                    className="text-sm uppercase tracking-wider mb-1"
                    style={{ color: '#94a3b8', opacity: 0.8 }}
                  >
                    Location
                  </p>
                  <p
                    className="text-lg md:text-xl"
                    style={{ color: '#e2e8f0', opacity: 1 }}
                  >
                    Ankara, Turkey
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p
                  className="text-sm uppercase tracking-wider mb-4"
                  style={{ color: '#94a3b8', opacity: 0.8 }}
                >
                  Follow Us
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#12132a] border border-[#1e293b] flex items-center justify-center hover:border-[#e84545] hover:bg-[#e84545] transition-all duration-200 hover:scale-110"
                  >
                    <FaTwitter className="text-white text-xl" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#12132a] border border-[#1e293b] flex items-center justify-center hover:border-[#e84545] hover:bg-[#e84545] transition-all duration-200 hover:scale-110"
                  >
                    <FaInstagram className="text-white text-xl" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#12132a] border border-[#1e293b] flex items-center justify-center hover:border-[#e84545] hover:bg-[#e84545] transition-all duration-200 hover:scale-110"
                  >
                    <FaLinkedin className="text-white text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN - Contact Form */}
            <motion.div variants={fadeInUp}>
              <h2
                className="text-3xl md:text-4xl font-bold mb-8"
                style={{ color: '#ffffff', opacity: 1 }}
              >
                SEND US A MESSAGE
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-[#12132a] border border-[#1e293b] rounded-lg text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#e84545] transition-colors duration-200"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-[#12132a] border border-[#1e293b] rounded-lg text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#e84545] transition-colors duration-200"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 bg-[#12132a] border border-[#1e293b] rounded-lg text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#e84545] transition-colors duration-200"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#12132a] border border-[#1e293b] rounded-lg text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#e84545] transition-colors duration-200 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-[#e84545] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#ff5555] transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    boxShadow: '0 4px 14px 0 rgba(232, 69, 69, 0.3)',
                  }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
