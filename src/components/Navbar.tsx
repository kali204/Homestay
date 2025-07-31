import { Heart } from 'lucide-react';

interface NavbarProps {
  onShareClick: () => void;
}

export function Navbar({ onShareClick }: NavbarProps) {
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Name only, no icon */}
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-extrabold text-green-800 tracking-tight">
              RedLeaf Homestay
            </span>
          </div>

          {/* Share Experience Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onShareClick}
              className="
                bg-green-700 hover:bg-green-800 
                text-white 
                px-4 py-2 rounded-lg 
                transition-colors 
                flex items-center space-x-2
                shadow-sm
                focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1
              "
              aria-label="Share your experience"
            >
              <Heart className="h-4 w-4" />
              <span>Share Experience</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
