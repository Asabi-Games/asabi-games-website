import { useRef, useState, useEffect, useCallback } from 'react';

// Glob all images under public/ subfolders at build time
const allImages = import.meta.glob<string>(
  '/public/**/*.{png,jpg,jpeg,webp}',
  { eager: true, query: '?url', import: 'default' }
);

function getScreenshots(folder: string): string[] {
  const prefix = `/public${folder}/`;
  return Object.entries(allImages)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path]) => path.replace('/public', ''));
}

interface ScreenshotCarouselProps {
  folder: string; // e.g. "/COC_Screenshots"
}

const ScreenshotCarousel = ({ folder }: ScreenshotCarouselProps) => {
  const screenshots = getScreenshots(folder);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[index] as HTMLElement | undefined;
    if (child) {
      container.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
    }
  }, []);

  const handlePrev = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(screenshots.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // Sync activeIndex on scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const width = container.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(Math.min(index, screenshots.length - 1));
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, [screenshots.length]);

  if (screenshots.length === 0) return null;

  return (
    <div className="relative py-4">
      {/* Carousel container */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto overflow-y-hidden snap-x snap-mandatory carousel-scroll"
        style={{ scrollbarWidth: 'none' }}
      >
        {screenshots.map((src, i) => (
          <div
            key={src}
            className="flex-shrink-0 w-full snap-center flex items-center justify-center
                        h-[200px] sm:h-[300px] lg:h-[400px]"
          >
            <div className="h-full rounded-2xl overflow-hidden bg-[#12132a] p-2 border border-[#2a2d4a] shadow-[0_4px_20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]">
              <img
                src={src}
                alt={`Screenshot ${i + 1}`}
                className="h-full max-w-full object-contain rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Arrow buttons */}
      {screenshots.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                       w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center
                       hover:bg-black/80 transition-colors duration-200
                       disabled:opacity-30 disabled:cursor-default"
            disabled={activeIndex === 0}
            aria-label="Previous screenshot"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                       w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center
                       hover:bg-black/80 transition-colors duration-200
                       disabled:opacity-30 disabled:cursor-default"
            disabled={activeIndex === screenshots.length - 1}
            aria-label="Next screenshot"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
      {screenshots.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActiveIndex(i); scrollToIndex(i); }}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                i === activeIndex ? 'bg-[#e84545]' : 'bg-gray-600'
              }`}
              aria-label={`Go to screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Hide scrollbar CSS */}
      <style>{`
        .carousel-scroll::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default ScreenshotCarousel;
