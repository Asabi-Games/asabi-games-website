import { motion } from 'framer-motion';

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Company values
  const values = [
    {
      icon: '🎮',
      title: 'INNOVATION',
      description: 'We push boundaries in mobile gaming. Every game we create brings something new to the table — fresh mechanics, unique art styles, and engaging experiences.',
    },
    {
      icon: '🎨',
      title: 'CREATIVITY',
      description: 'Our team of designers and developers work together to craft visually stunning worlds. We believe great games start with great art and storytelling.',
    },
    {
      icon: '🚀',
      title: 'QUALITY',
      description: 'We don\'t ship until it\'s ready. Every feature is tested, polished, and optimized to deliver the best possible experience to our players.',
    },
  ];

  // Timeline milestones
  const timeline = [
    {
      year: '2022',
      title: 'The Beginning',
      description: 'Asabi Games was founded with a vision to create innovative mobile games that players love.',
      gradient: 'from-purple-600 to-blue-600',
    },
    {
      year: '2023',
      title: 'First Prototype',
      description: 'Our team developed the first game prototype, testing core mechanics and gathering player feedback.',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      year: '2024',
      title: 'Growing Team',
      description: 'The team expanded to 4 passionate game developers, designers, and artists.',
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      year: '2025',
      title: 'Launch Year',
      description: 'Multiple game titles in development. Preparing for our first official launches and publisher partnerships.',
      gradient: 'from-orange-600 to-red-600',
    },
  ];

  // Team stats
  const stats = [
    { number: '4', label: 'Team Members' },
    { number: '3+', label: 'Years Experience' },
    { number: '4', label: 'Game Genres' },
    { number: '2025', label: 'Launch Year' },
  ];

  return (
    <div className="relative">
      {/* HERO SECTION */}
      <motion.section
        className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0505] via-[#0a0b1a] to-[#0a0b1a]"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Hero content - Creative Typography */}
        <div className="relative z-10 text-center px-4">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.3em] mb-4"
              style={{ color: '#ffffff', opacity: 1 }}
              variants={fadeInUp}
            >
              ASABI
            </motion.h1>
            <motion.div
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ color: '#e84545', opacity: 1 }}
              variants={fadeInUp}
            >
              =
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.2em]"
              style={{ color: '#ffffff', opacity: 1 }}
              variants={fadeInUp}
            >
              PASSION + GAMING
            </motion.h2>
          </motion.div>
        </div>
      </motion.section>

      {/* COMPANY VALUES SECTION */}
      <section className="py-20 bg-[#0a0b1a]">
        <motion.div
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              className={`flex flex-col md:flex-row items-start gap-6 py-12 ${
                index < values.length - 1 ? 'border-b border-[#1e293b]' : ''
              }`}
            >
              {/* Icon */}
              <div className="text-7xl md:text-8xl flex-shrink-0">
                {value.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ color: '#ffffff', opacity: 1 }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ color: '#94a3b8', opacity: 0.95 }}
                >
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-20 bg-[#0a0b1a]">
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Timeline container */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#1e293b] hidden md:block"></div>

            {timeline.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                variants={fadeInUp}
                className={`relative mb-16 md:mb-24 flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                  <p
                    className="text-sm uppercase tracking-wider mb-2"
                    style={{ color: '#94a3b8', opacity: 0.8 }}
                  >
                    {milestone.year}
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-3"
                    style={{ color: '#ffffff', opacity: 1 }}
                  >
                    {milestone.title}
                  </h3>
                  <p
                    className="text-base md:text-lg leading-relaxed mb-6"
                    style={{ color: '#94a3b8', opacity: 0.95 }}
                  >
                    {milestone.description}
                  </p>
                </div>

                {/* Red dot on timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#e84545] rounded-full border-4 border-[#0a0b1a] z-10 hidden md:block"></div>

                {/* Image placeholder */}
                <div className="flex-1 w-full">
                  <div className={`aspect-video rounded-xl bg-gradient-to-br ${milestone.gradient} shadow-2xl`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* TEAM STATS SECTION */}
      <section className="py-20 bg-[#12132a]">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center"
              >
                <div
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3"
                  style={{ color: '#e84545', opacity: 1 }}
                >
                  {stat.number}
                </div>
                <p
                  className="text-base md:text-lg font-medium"
                  style={{ color: '#ffffff', opacity: 0.9 }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
