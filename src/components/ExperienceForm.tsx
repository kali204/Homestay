import React from 'react';

interface ExperienceFormProps {
  newExperience: {
    name: string;
    location: string;
    rating: number;
    story: string;
    image: string;
  };
  setNewExperience: React.Dispatch<
    React.SetStateAction<{
      name: string;
      location: string;
      rating: number;
      story: string;
      image: string;
    }>
  >;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ExperienceForm({
  newExperience,
  setNewExperience,
  onSubmit,
  onClose,
  onImageUpload,
}: ExperienceFormProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Share Your Experience</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            value={newExperience.name}
            onChange={(e) => setNewExperience((prev) => ({ ...prev, name: e.target.value }))}
            className="w-full p-3 border rounded-lg"
            required
          />

          <div>
            <label className="block text-sm font-medium mb-2">Rating</label>
            <select
              value={newExperience.rating}
              onChange={(e) =>
                setNewExperience((prev) => ({ ...prev, rating: parseInt(e.target.value) }))
              }
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
            onChange={(e) => setNewExperience((prev) => ({ ...prev, story: e.target.value }))}
            className="w-full p-3 border rounded-lg h-32"
            required
          />
          <div>
            <label className="block text-sm font-medium mb-2">Upload Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={onImageUpload}
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
  );
}
