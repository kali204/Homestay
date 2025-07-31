import React from 'react';
import { Experience } from '../type'; // Make sure this exists!
import { Star, User, MapPin, Calendar } from 'lucide-react';

const experiences: Experience[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Kainchi Dham, Nainital',
    rating: 5,
    date: '2024-02-10',
    story:
      'The serene environment and warm hospitality made my stay unforgettable. The views of the hills were breathtaking.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Rajesh Verma',
    location: 'Kainchi Dham, Nainital',
    rating: 4,
    date: '2024-02-15',
    story:
      'A perfect getaway from city life, enjoying fresh mountain air and local culture at RedLeaf Homestay.',
    image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Anita Singh',
    location: 'Kainchi Dham, Nainital',
    rating: 5,
    date: '2024-02-20',
    story:
      'Loved the warmth of the hosts and the authentic home-cooked meals. Nature walks nearby were refreshing!',
    image: 'https://images.unsplash.com/photo-1549887534-77e1dbf1a25c?auto=format&fit=crop&w=800&q=80',
  },
];

export function ExperiencesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease forwards;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Guest Experiences</h2>
          <p className="text-xl text-gray-600">Real stories from our mountain homestay guests</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {exp.image && (
                <img src={exp.image} alt={exp.location} className="w-full h-48 object-cover" />
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
  );
}
