import React from 'react';

const Gallery = () => {
  const images = [
    'https://via.placeholder.com/400x300?text=Event+1',
    'https://via.placeholder.com/400x300?text=Event+2',
    'https://via.placeholder.com/400x300?text=Event+3',
    'https://via.placeholder.com/400x300?text=Event+4',
    'https://via.placeholder.com/400x300?text=Event+5',
    'https://via.placeholder.com/400x300?text=Event+6',
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Event Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`Event ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
