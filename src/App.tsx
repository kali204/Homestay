import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GallerySection } from './components/GallerySection';
import { FeaturesSection } from './components/FeatureSection';
import { ExperiencesSection } from './components/ExperienceSection';
import { ExperienceForm } from './components/ExperienceForm';
import { Footer } from './components/Footer';
import { Experience } from './type';
export default function App() {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      location: 'Mountain View Cabin',
      rating: 5,
      date: '2024-01-15',
      story:
        'Waking up to the sound of birds and mountain views was pure magic. The hosts were incredibly welcoming and the home-cooked meals were unforgettable.',
      image:
        'https://images.unsplash.com/photo-1622150736551-03defd21c5cd?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhvbWVzdGF5JTIwbmF0dXJlJTIwbGFuZHNjYXBlJTIwY296eSUyMGNhYmlufGVufDB8fHx8MTc1MTI1NDA4N3ww&ixlib=rb-4.1.0',
    },
    {
      id: '2',
      name: 'Michael Chen',
      location: 'Forest Retreat',
      rating: 5,
      date: '2024-01-08',
      story:
        'The perfect escape from city life. Hiking trails right from the doorstep and evenings by the fireplace were exactly what I needed.',
      image:
        'https://images.unsplash.com/photo-1689693780003-d7ba1d9befa2?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb3VudGFpbiUyMGhvbWVzdGF5JTIwbmF0dXJlJTIwbGFuZHNjYXBlJTIwY296eSUyMGNhYmlufGVufDB8fHx8MTc1MTI1NDA4N3ww&ixlib=rb-4.1.0',
    },
  ]);

  const [newExperience, setNewExperience] = useState({
    name: '',
    location: '',
    rating: 5,
    story: '',
    image: '',
  });

  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const experience: Experience = {
      id: Date.now().toString(),
      ...newExperience,
      date: new Date().toISOString().split('T')[0],
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
        setNewExperience((prev) => ({ ...prev, image: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar onShareClick={() => setShowForm(true)} />
      <HeroSection
        onExploreClick={() => alert('Explore Homestays')}
        onViewExperiencesClick={() => setShowForm(true)}
      />
      <FeaturesSection />
      {showForm && (
        <ExperienceForm
          newExperience={newExperience}
          setNewExperience={setNewExperience}
          onSubmit={handleSubmit}
          onClose={() => setShowForm(false)}
          onImageUpload={handleImageUpload}
        />
      )}
      <ExperiencesSection />
      <GallerySection />
      <Footer />
    </div>
  );
}
