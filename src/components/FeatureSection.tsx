import { Mountain, Users, Heart } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose RedLeaf Homestay</h2>
          <p className="text-xl text-gray-600">Experience authentic mountain living in Kainchi Dham, Nainital</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Authentic Experience */}
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-redleaf/60 via-redleaf2/60 to-redleaf/40 shadow-lg">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-redleaf2 shadow-md">
              <Mountain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Authentic Experience</h3>
            <p className="text-redleaf-light">
              Live like locals in traditional mountain homes surrounded by pristine nature
            </p>
          </div>
          
          {/* Community Stories */}
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-redleaf-light/50 via-redleaf/50 to-redleaf2/50 shadow-md">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-redleaf shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Community Stories</h3>
            <p className="text-redleaf-light">
              Share and discover real experiences from fellow travelers
            </p>
          </div>
          
          {/* Nature Connection */}
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-redleaf2/70 via-redleaf/70 to-redleaf2/50 shadow-lg">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-redleaf shadow">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Nature Connection</h3>
            <p className="text-redleaf-light">
              Reconnect with nature through hiking, fresh air, and mountain views
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
