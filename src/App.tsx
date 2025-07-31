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
  ]);

  const [newExperience, setNewExperience] = useState({
    name: '',
    location: '',
    rating: 5,
    story: '',
    image: '',
  });

  const [showForm, setShowForm] = useState(false);

  // Form submission handler
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

  // Image upload handler
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewExperience((prev) => ({ ...prev, image: reader.result as string }));
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
      <ExperiencesSection experiences={experiences} />
      <GallerySection />
      <Footer />
    </div>
  );
}
