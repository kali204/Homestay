interface HeroSectionProps {
  onExploreClick: () => void;
  onViewExperiencesClick: () => void;
}

export function HeroSection({ onExploreClick, onViewExperiencesClick }: HeroSectionProps) {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image with autumn mountain & redleaf tone */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1300&q=80"
          alt="Autumn forest hills of Uttarakhand"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.75) saturate(115%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#C62C11]/60 to-transparent"></div>
      </div>
      {/* Foreground content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-xl leading-tight">
          Welcome to
          <span className="block text-[2.8rem] md:text-[4.5rem] font-extrabold tracking-tight"
                style={{ color: '#C62C11', textShadow: "0 1px 8px rgba(73,23,10,0.18)" }}>
            RedLeaf Homestay
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-neutral-100 drop-shadow-md">
          Experience the vibrant beauty and tranquil comfort of autumn in
          <span className="ml-1 text-redleaf2 font-semibold">Kainchi Dham, Nainital, Uttarakhand</span>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            className="bg-[#C62C11] hover:bg-[#B01805] text-white px-8 py-3 rounded-lg text-lg font-semibold drop-shadow-lg transition-colors"
            onClick={onExploreClick}
          >
            Explore RedLeaf
          </button>
          <button
            className="border-2 border-[#C62C11] text-[#C62C11] px-8 py-3 rounded-lg text-lg font-semibold bg-white/70 hover:bg-[#C62C11] hover:text-white transition-colors drop-shadow-md"
            onClick={onViewExperiencesClick}
          >
            View Experiences
          </button>
        </div>
      </div>
    </section>
  );
}
