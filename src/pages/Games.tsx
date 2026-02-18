import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Games = () => {
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
        staggerChildren: 0.1,
      },
    },
  };

  // Games data
  const games = [
    {
      id: 1,
      name: 'Shadow Quest',
      slogan: 'EPIC RPG ADVENTURE',
      imageGradient: 'from-purple-600 via-blue-600 to-indigo-700',
      iconGradient: 'from-purple-500 to-blue-500',
    },
    {
      id: 2,
      name: 'Pixel Survivors',
      slogan: 'SURVIVE THE CHAOS',
      imageGradient: 'from-red-600 via-orange-600 to-yellow-600',
      iconGradient: 'from-red-500 to-orange-500',
    },
    {
      id: 3,
      name: 'Mind Grid',
      slogan: 'PUZZLE YOUR WAY',
      imageGradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      iconGradient: 'from-emerald-500 to-cyan-500',
    },
    {
      id: 4,
      name: 'Blade Runner',
      slogan: 'SLASH & DASH',
      imageGradient: 'from-orange-600 via-amber-600 to-yellow-500',
      iconGradient: 'from-orange-500 to-yellow-500',
    },
    {
      id: 5,
      name: 'Tower Defense X',
      slogan: 'DEFEND YOUR REALM',
      imageGradient: 'from-blue-600 via-indigo-600 to-purple-600',
      iconGradient: 'from-blue-500 to-purple-500',
    },
    {
      id: 6,
      name: 'Cosmic Merge',
      slogan: 'MERGE & EVOLVE',
      imageGradient: 'from-pink-600 via-fuchsia-600 to-purple-600',
      iconGradient: 'from-pink-500 to-purple-500',
    },
  ];

  return (
    <div className="relative">
      {/* HERO BANNER */}
      <motion.section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#0a0b1a] to-[#0a1a1a]">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide"
            style={{ color: '#ffffff', opacity: 1 }}
            variants={fadeInUp}
          >
            WE ARE A GAMING STUDIO!
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#e2e8f0', opacity: 0.95 }}
            variants={fadeInUp}
          >
            Asabi Games is dedicated to creating immersive mobile experiences that inspire players worldwide.
          </motion.p>
        </div>
      </motion.section>

      {/* GAMES GRID SECTION */}
      <section className="py-20 bg-[#0a0b1a]">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <motion.div
                key={game.id}
                className="group relative bg-[#12132a] rounded-2xl border border-[#1e293b] overflow-hidden hover:border-[#e84545] transition-all duration-300"
                style={{ padding: '1.5rem' }}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
              >
                {/* Game Image */}
                <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${game.imageGradient}`}></div>

                  {/* Game Icon - Half overlapping the image */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${game.iconGradient} border-4 border-[#12132a] shadow-xl flex items-center justify-center`}
                    >
                      <span className="text-white text-2xl font-bold">
                        {game.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Game Info */}
                <div className="text-center mt-4">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#ffffff', opacity: 1 }}>
                    {game.name}
                  </h3>
                  <p className="text-sm tracking-wider mb-6" style={{ color: '#94a3b8', opacity: 0.9 }}>
                    {game.slogan}
                  </p>

                  {/* Read More Button */}
                  <Link
                    to={`/games/${game.id}`}
                    className="inline-block bg-[#e84545] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#ff5555] transition-all duration-200 hover:shadow-[0_0_20px_rgba(232,69,69,0.5)]"
                  >
                    Read More
                  </Link>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                     style={{ boxShadow: '0 0 30px rgba(232, 69, 69, 0.3)' }}>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Games;
