import  { useState, useEffect } from 'react';
import { Mountain, Users, Heart, Upload, Star, MapPin, Calendar, User } from 'lucide-react';

interface Experience {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  story: string;
  image?: string;
}

export default function App() {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      location: 'Mountain View Cabin',
      rating: 5,
      date: '2024-01-15',
      story: 'Waking up to the sound of birds and mountain views was pure magic. The hosts were incredibly welcoming and the home-cooked meals were unforgettable.',
      image: 'https://images.unsplash.com/photo-1622150736551-03defd21c5cd?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhvbWVzdGF5JTIwbmF0dXJlJTIwbGFuZHNjYXBlJTIwY296eSUyMGNhYmlufGVufDB8fHx8MTc1MTI1NDA4N3ww&ixlib=rb-4.1.0'
    },
    {
      id: '2',
      name: 'Michael Chen',
      location: 'Forest Retreat',
      rating: 5,
      date: '2024-01-08',
      story: 'The perfect escape from city life. Hiking trails right from the doorstep and evenings by the fireplace were exactly what I needed.',
      image: 'https://images.unsplash.com/photo-1689693780003-d7ba1d9befa2?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb3VudGFpbiUyMGhvbWVzdGF5JTIwbmF0dXJlJTIwbGFuZHNjYXBlJTIwY296eSUyMGNhYmlufGVufDB8fHx8MTc1MTI1NDA4N3ww&ixlib=rb-4.1.0'
    }
  ]);

  const [newExperience, setNewExperience] = useState({
    name: '',
    location: '',
    rating: 5,
    story: '',
    image: ''
  });

  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const experience: Experience = {
      id: Date.now().toString(),
      ...newExperience,
      date: new Date().toISOString().split('T')[0]
    };
    setExperiences([experience, ...experiences]);
    setNewExperience({ name: '', location: '', rating: 5, story: '', image: '' });
    setShowForm(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewExperience({ ...newExperience, image: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-800">Mountain Homestay</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <Heart className="h-4 w-4" />
                <span>Share Experience</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1545061888-62202ebc62cf?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxtb3VudGFpbiUyMGhvbWVzdGF5JTIwbmF0dXJlJTIwbGFuZHNjYXBlJTIwY296eSUyMGNhYmlufGVufDB8fHx8MTc1MTI1NDA4N3ww&ixlib=rb-4.1.0"
            alt="Mountain homestay aerial view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Embrace Nature's
            <span className="block text-green-400">Tranquility</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover authentic mountain homestays where nature meets comfort
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700 transition-colors" onClick={() => alert('Explore Homestays')}>
              Explore Homestays
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-gray-800 transition-colors" onClick={() => setShowForm(true)}>
              View Experiences
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Mountain Homestay</h2>
            <p className="text-xl text-gray-600">Experience authentic mountain living</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-blue-50">
              <div className="mountain-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mountain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Authentic Experience</h3>
              <p className="text-gray-600">Live like locals in traditional mountain homes surrounded by pristine nature</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-blue-50">
              <div className="nature-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community Stories</h3>
              <p className="text-gray-600">Share and discover real experiences from fellow travelers</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-blue-50">
              <div className="forest-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Nature Connection</h3>
              <p className="text-gray-600">Reconnect with nature through hiking, fresh air, and mountain views</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Share Your Experience</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={newExperience.name}
                onChange={(e) => setNewExperience({ ...newExperience, name: e.target.value })}
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Homestay location"
                value={newExperience.location}
                onChange={(e) => setNewExperience({ ...newExperience, location: e.target.value })}
                className="w-full p-3 border rounded-lg"
                required
              />
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <select
                  value={newExperience.rating}
                  onChange={(e) => setNewExperience({ ...newExperience, rating: parseInt(e.target.value) })}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value={5}>5 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={2}>2 Stars</option>
                  <option value={1}>1 Star</option>
                </select>
              </div>
              <textarea
                placeholder="Share your story..."
                value={newExperience.story}
                onChange={(e) => setNewExperience({ ...newExperience, story: e.target.value })}
                className="w-full p-3 border rounded-lg h-32"
                required
              />
              <div>
                <label className="block text-sm font-medium mb-2">Upload Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Share Experience
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Experiences Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Guest Experiences</h2>
            <p className="text-xl text-gray-600">Real stories from our mountain homestay guests</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                {exp.image && (
                  <img
                    src={exp.image}
                    alt={exp.location}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-gray-500" />
                      <span className="font-medium">{exp.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(exp.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mb-3 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{new Date(exp.date).toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{exp.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Mountain Homestay Gallery</h2>
            <p className="text-xl text-gray-600">Discover the beauty of our locations</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1622150736551-03defd21c5cd?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhvbWVzdGF5JTIwbmF0dXJlJTIwbGFuZHNjYXBlJTIwY296eSUyMGNhYmlufGVufDB8fHx8MTc1MTI1NDA4N3ww&ixlib=rb-4.1.0',
              'https://images.unsplash.com/photo-1689693780003-d7ba1d9befa2?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb3VudGFpbiUyMGhvbWVzdGF5JTIwbmF0dXJlJTIwbGFuZHNjYXBlJTIwY296eSUyMGNhYmlufGVufDB8fHx8MTc1MTI1NDA4N3ww&ixlib=rb-4.1.0',
              'https://images.unsplash.com/photo-1694467177519-35b4f59ced18?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxtb3VudGFpbiUyMGhvbWVzdGF5JTIwbmF0dXJlJTIwbGFuZHNjYXBlJTIwY296eSUyMGNhYmlufGVufDB8fHx8MTc1MTI1NDA4N3ww&ixlib=rb-4.1.0',
              'https://images.unsplash.com/photo-1664396966488-5820b09a92ee?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxtb3VudGFpbiUyMGhvbWVzdGF5JTIwbmF0dXJlJTIwbGFuZHNjYXBlJTIwY296eSUyMGNhYmlufGVufDB8fHx8MTc1MTI1NDA4N3ww&ixlib=rb-4.1.0',
              'https://images.unsplash.com/photo-1545061888-62202ebc62cf?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxtb3VudGFpbiUyMGhvbWVzdGF5JTIwbmF0dXJlJTIwbGFuZHNjYXBlJTIwY296eSUyMGNhYmlufGVufDB8fHx8MTc1MTI1NDA4N3ww&ixlib=rb-4.1.0',
              'https://images.unsplash.com/photo-1626426068803-7cca2971c44e?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw2fHxtb3VudGFpbiUyMGhvbWVzdGF5JTIwbmF0dXJlJTIwbGFuZHNjYXBlJTIwY296eSUyMGNhYmlufGVufDB8fHx8MTc1MTI1NDA4N3ww&ixlib=rb-4.1.0'
            ].map((src, index) => (
              <div key={index} className="group overflow-hidden rounded-xl">
                <img
                  src={src}
                  alt={`Mountain homestay ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Mountain className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">Mountain Homestay</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">Experience nature's tranquility</p>
              <p className="text-sm text-gray-500 mt-2">© 2024 Mountain Homestay. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
 