import { Mountain } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#180909] text-[#f1e6e1] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left: Logo and name */}
          <div className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-[#C62C11]" />
            <span className="text-xl font-extrabold tracking-wide text-[#C62C11]">
              RedLeaf Homestay
            </span>
          </div>

          {/* Center: Address */}
          <address className="not-italic text-center text-sm md:text-base text-[#e0c7b2]">
            Kainchi Dham, Nainital,<br /> Uttarakhand, India
          </address>

          {/* Right: Social media */}
          <div className="text-center md:text-right text-sm md:text-base text-[#e0c7b2]">
            <p className="mb-1">Follow us on Instagram</p>
            <a
              href="https://instagram.com/redleaf_homestay13"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[#C62C11] font-semibold hover:text-[#B01805] transition-colors"
            >
              <img
                src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000"
                alt="Instagram"
                className="w-5 h-5 inline-block"
                
              />
              <span>@redleaf_homestay13</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 text-center text-xs text-[#7d4a44]">
          © 2024 RedLeaf Homestay. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
