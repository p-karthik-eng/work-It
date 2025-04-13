import React from 'react';
import Design1 from "../assets/design4.png";
import Design2 from "../assets/design2.png";
import Design3 from "../assets/design1.png";
import Design4 from "../assets/design3.png";
import Design5 from "../assets/design8.png";
import Design6 from "../assets/design6.png";
import Design7 from "../assets/design7.png";
import Design8 from "../assets/design5.png";

export default function AppImageShowcase() {
  const appImages = [
    {
      src: Design1,
      alt: "Work It App Screenshot 1",
    },
    {
      src: Design2,
      alt: "Work It App Screenshot 2",
    },
    {
      src: Design3,
      alt: "Work It App Screenshot 3",
    },
    {
      src: Design4,
      alt: "Work It App Screenshot 4",
    },
    {
      src: Design5,
      alt: "Work It App Screenshot 5",
    },
    {
      src: Design6,
      alt: "Work It App Screenshot 6",
    },
    {
      src: Design7,
      alt: "Work It App Screenshot 5",
    },
    {
      src: Design8,
      alt: "Work It App Screenshot 5",
    },
  ];

  return (
    <section id="appimages" className="p-8 text-center mx-4 sm:mx-10 md:mx-20 mt-10">
      <h2 className="lg:text-6xl text-3xl font-josefin font-semibold mb-10 text-blue-600">
        App Preview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-20">
        {appImages.map((image, index) => (
          <div
            key={index}
            className="relative group  cursor-pointer overflow-hidden rounded-lg  hover:scale-105 transition-transform duration-300"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-contain"
            />
          
          </div>
        ))}
      </div>
    </section>
  );
}
