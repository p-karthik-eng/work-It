import React, { useState } from 'react';

export default function AppImageShowcase() {
  const [selectedImage, setSelectedImage] = useState(null);

  const appImages = [
    {
      src: "https://via.placeholder.com/400x300",
      alt: "Work It App Screenshot 1",
      description: "Login"
    },
    {
      src: "https://via.placeholder.com/400x300",
      alt: " Work It App Screenshot 2",
      description: "Interactive map view"
    },
    {
      src: "https://via.placeholder.com/400x300",
      alt: "Work It  App Screenshot 3",
      description: "Explore local communities"
    },
    {
      src: "https://via.placeholder.com/400x300",
      alt: "Work It App Screenshot 4",
      description: "Add new community"
    },
    {
      src: "https://via.placeholder.com/400x300",
      alt: "Work It app Screenshot 5",
      description: "Discover nearby connections"
    },
    {
      src: "https://via.placeholder.com/400x300",
      alt: "Work It App Screenshot 6",
      description: "Register"
    }
  ];

  return (
    <section id="appimages" className="p-8 text-center mx-4 sm:mx-10 md:mx-20 mt-10">
      <h2 className="lg:text-6xl text-3xl font-josefin font-semibold mb-10 text-blue-600">
        App Preview
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {appImages.map((image, index) => (
          <div
            key={index}
            className="relative group border-2 cursor-pointer overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <p className="text-white opacity-0 group-hover:opacity-100 text-center px-4 transition-opacity duration-300">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
