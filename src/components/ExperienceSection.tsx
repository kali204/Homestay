import React from 'react';
import { Experience } from '../type';
import { Star, User, MapPin, Calendar } from 'lucide-react';

interface ExperiencesSectionProps {
  experiences: Experience[];
}

export function ExperiencesSection({ experiences }: ExperiencesSectionProps) {
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
                <img src={exp.image} alt={`${exp.name} at ${exp.location}`} className="w-full h-48 object-cover" />
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-gray-500" aria-hidden="true" />
                    <span className="font-medium">{exp.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(exp.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2 mb-3 text-gray-600">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm">{exp.location}</span>
                </div>
                <div className="flex items-center space-x-2 mb-4 text-gray-600">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
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
