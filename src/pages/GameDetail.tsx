import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import ScreenshotCarousel from '../components/ScreenshotCarousel';

const gamesData: Record<string, {
  name: string;
  description: string;
  image: string;
  googlePlayLink: string;
  discordLink: string;
  screenshotFolder: string;
}> = {
  ClashOfRealms: {
    name: 'Clash Of Realms',
    description: 'A tactical semi auto-battler strategy deck and kingdom builder with roguelike elements, where realms clash through cards, skills, and infinite scaling strategies.',
    image: '/GameIcon.jpeg',
    googlePlayLink: 'https://play.google.com/store/apps/details?id=com.asabi.AutoBattlerStrategy',
    discordLink: 'https://discord.gg/NK2hg7RP',
    screenshotFolder: '/COC_Screenshots',
  },
};

const GameDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const game = slug ? gamesData[slug] : undefined;

  if (!game) {
    return <Navigate to="/games" replace />;
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative">
      {/* HERO / FEATURE IMAGE */}
      <motion.section
        className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1a0a2e] via-[#0a0b1a] to-[#0a0b1a]"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <img
            src={game.image}
            alt={game.name}
            className="w-full max-w-md mx-auto rounded-3xl shadow-[0_0_60px_rgba(232,69,69,0.3)] border border-[#1e293b]"
          />
        </div>

        {/* Subtle glow behind image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
      </motion.section>

      {/* SCREENSHOT CAROUSEL */}
      <section className="bg-[#0a0b1a] pt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScreenshotCarousel folder={game.screenshotFolder} />
        </div>
      </section>

      {/* GAME INFO SECTION */}
      <motion.section
        className="py-16 md:py-24 bg-[#0a0b1a]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#ffffff', opacity: 1 }}>
            {game.name}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-12" style={{ color: '#e2e8f0', opacity: 0.95 }}>
            {game.description}
          </p>

          {/* Store Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://apps.apple.com/tr/app/auto-battler-strategy/id6752348520"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200 hover:scale-105"
            >
              <FaApple className="text-2xl" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </a>
            <a
              href={game.googlePlayLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200 hover:scale-105"
            >
              <FaGooglePlay className="text-xl" />
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </a>
            <a
              href={game.discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#5865F2] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#4752C4] transition-all duration-200 hover:scale-105"
            >
              <img src="/discordImage.png" alt="Discord" className="w-6 h-6 rounded-full" />
              <div className="text-left">
                <div className="text-xs">JOIN OUR</div>
                <div className="text-sm font-bold">Discord</div>
              </div>
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default GameDetail;
