import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Home = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
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

  // Featured games data
  const games = [
    {
      name: 'Shadow Quest',
      description: 'Embark on an epic RPG adventure through mysterious realms. Battle fierce enemies, collect legendary gear, and uncover ancient secrets.',
      gradient: 'from-purple-900/30 via-blue-900/30 to-[#0a0b1a]',
      viewLink: '/games',
    },
    {
      name: 'Pixel Survivors',
      description: 'Survive waves of enemies in this roguelike action game. Build your character, unlock powerful abilities, and fight until the end.',
      gradient: 'from-red-900/30 via-orange-900/30 to-[#0a0b1a]',
      viewLink: '/games',
    },
    {
      name: 'Mind Grid',
      description: 'Challenge your mind with innovative puzzles. Think strategically, solve complex patterns, and unlock new dimensions of gameplay.',
      gradient: 'from-emerald-900/30 via-cyan-900/30 to-[#0a0b1a]',
      viewLink: '/games',
    },
  ];

  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0b1a] via-[#12132a] to-[#0a0b1a]">
        {/* Starry background effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>

        {/* Hero content */}
        <motion.div
          className="relative z-10 text-center px-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.2em] mb-8"
            style={{ color: '#ffffff', opacity: 1 }}
            variants={fadeIn}
          >
            ASABI GAMES
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#e2e8f0', opacity: 0.95 }}
            variants={fadeInUp}
          >
            Crafting immersive mobile gaming experiences. RPG, Roguelike, Strategy & Puzzle games.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#94a3b8] rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#94a3b8] rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* FEATURED GAMES SECTIONS */}
      {games.map((game, index) => (
        <motion.section
          key={game.name}
          className={`relative py-20 md:py-32 bg-gradient-to-br ${game.gradient}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-16`}>
              {/* Game Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#ffffff', opacity: 1 }}>
                  {game.name}
                </h2>
                <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: '#e2e8f0', opacity: 0.95 }}>
                  {game.description}
                </p>

                {/* Store Buttons */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                  <a
                    href="#"
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200 hover:scale-105"
                  >
                    <FaApple className="text-2xl" />
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-sm font-bold">App Store</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200 hover:scale-105"
                  >
                    <FaGooglePlay className="text-xl" />
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-sm font-bold">Google Play</div>
                    </div>
                  </a>
                </div>

                {/* View Game Button */}
                <Link
                  to={game.viewLink}
                  className="inline-block bg-[#e84545] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#ff5555] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(232,69,69,0.5)]"
                >
                  View Game
                </Link>
              </div>

              {/* Game Image Placeholder */}
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#12132a] to-[#1e293b] rounded-2xl shadow-2xl flex items-center justify-center border border-[#1e293b]">
                  <span className="text-3xl md:text-4xl font-bold text-white/30">
                    {game.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* OUR PHILOSOPHY SECTION */}
      <motion.section
        className="relative py-20 md:py-32 bg-[#0a0b1a]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-wide" style={{ color: '#ffffff', opacity: 1 }}>
            OUR PHILOSOPHY
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: '#e2e8f0', opacity: 0.95 }}>
            We believe in creating games that challenge, inspire, and bring joy. Every pixel, every mechanic, every moment is crafted with passion and purpose.
          </p>
          <Link
            to="/about"
            className="inline-block bg-[#e84545] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#ff5555] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(232,69,69,0.5)]"
          >
            Read More
          </Link>
        </div>
      </motion.section>

      {/* STUDIO CULTURE SECTION */}
      <motion.section
        className="relative py-20 md:py-32 bg-gradient-to-br from-[#1a0a0a] via-[#12132a] to-[#0a0b1a]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Culture Image Placeholder */}
            <div className="flex-1 w-full">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#12132a] to-[#1e293b] rounded-2xl shadow-2xl flex items-center justify-center border border-[#1e293b]">
                <span className="text-3xl md:text-4xl font-bold text-white/30">
                  Team Culture
                </span>
              </div>
            </div>

            {/* Culture Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#ffffff', opacity: 1 }}>
                ASABI CULTURE
              </h2>
              <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: '#e2e8f0', opacity: 0.95 }}>
                Join our passionate team of game creators. We're building the future of mobile gaming.
              </p>
              <Link
                to="/about"
                className="inline-block bg-[#e84545] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#ff5555] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(232,69,69,0.5)]"
              >
                View Jobs
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* GAME PUBLISHING SECTION */}
      <motion.section
        className="relative py-20 md:py-32 bg-gradient-to-b from-[#0a0b1a] to-[#12132a]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#ffffff', opacity: 1 }}>
            Have a game idea? Let's talk!
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: '#e2e8f0', opacity: 0.95 }}>
            We're always looking for creative minds and innovative game concepts. Submit your game and let's create something amazing together.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#e84545] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#ff5555] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(232,69,69,0.5)]"
          >
            Contact Us
          </Link>
        </div>
      </motion.section>

      {/* CSS for starry background */}
      <style>{`
        .stars,
        .stars2,
        .stars3 {
          position: absolute;
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow:
            ${Array.from({ length: 200 }, () =>
              `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`
            ).join(',')};
          animation: animateStars 50s linear infinite;
        }

        .stars2 {
          width: 2px;
          height: 2px;
          box-shadow:
            ${Array.from({ length: 100 }, () =>
              `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`
            ).join(',')};
          animation: animateStars 100s linear infinite;
        }

        .stars3 {
          width: 3px;
          height: 3px;
          box-shadow:
            ${Array.from({ length: 50 }, () =>
              `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`
            ).join(',')};
          animation: animateStars 150s linear infinite;
        }

        .stars::after,
        .stars2::after,
        .stars3::after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 1px;
          height: 1px;
          background: transparent;
        }

        @keyframes animateStars {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
