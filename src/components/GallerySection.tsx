import './gallery.css'
export function GallerySection() {
  const images = [
    'https://images.unsplash.com/photo-1622150736551-03defd21c5cd?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhvbWVzdGF5JTIwbmF0dXJlJTIwbGFuZHNjYXBlJTIwY296eSUyMGNhYmlufGVufDB8fHx8MTc1MTI1NDA4N3ww&ixlib=rb-4.1.0',
    'https://images.unsplash.com/photo-1689693780003-d7ba1d9befa2?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb3VudGFpbiUyMGhvbWVzdGF5JTIwbmF0dXJlJTIwbGFuZHNjYXBlJTIwY296eSUyMGNhYmlufGVufDB8fHx8MTc1MTI1NDA4N3ww&ixlib=rb-4.1.0',
    'https://images.unsplash.com/photo-1694467177519-35b4f59ced18?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxtb3VudGFpbiUyMGhvbWVzdGF5JTIwbmF0dXJlJTIwbGFuZHNjYXBlJTIwY296eSUyMGNhYmlufGVufDB8fHx8MTc1MTI1NDA4N3ww&ixlib=rb-4.1.0',
    'https://images.unsplash.com/photo-1664396966488-5820b09a92ee?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxtb3VudGFpbiUyMGhvbWVzdGF5JTIwbmF0dXJlJTIwbGFuZHNjYXBlJTIwY296eSUyMGNhYmlufGVufDB8fHx8MTc1MTI1NDA4N3ww&ixlib=rb-4.1.0',
    'https://images.unsplash.com/photo-1545061888-62202ebc62cf?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxtb3VudGFpbiUyMGhvbWVzdGF5JTIwbmF0dXJlJTIwbGFuZHNjYXBlJTIwY296eSUyMGNhYmlufGVufDB8fHx8MTc1MTI1NDA4N3ww&ixlib=rb-4.1.0',
    'https://images.unsplash.com/photo-1626426068803-7cca2971c44e?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw2fHxtb3VudGFpbiUyMGhvbWVzdGF5JTIwbmF0dXJlJTIwbGFuZHNjYXBlJTIwY296eSUyMGNhYmlufGVufDB8fHx8MTc1MTI1NDA4N3ww&ixlib=rb-4.1.0',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Mountain Homestay Gallery</h2>
        <p className="text-xl text-gray-600 mb-12">Discover the beauty of our locations</p>
      </div>

      <div className="container mx-auto flex justify-center items-center gap-4 px-4 sm:px-6 lg:px-8">
        {images.map((src, index) => (
          <div key={index} className="item">
            <img
              src={src}
              alt={`Mountain homestay ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
