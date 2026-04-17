import { useEffect, useState } from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1661663379320-213541539ec8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxzd2VlcGVyfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  "https://plus.unsplash.com/premium_photo-1677234146598-90e9edc57bca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3dlZXBlcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683141112334-d7d404f6e716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN3ZWVwZXJ8ZW58MHx8MHx8fDA%3D",
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="ml-6 md:ml-12 relative w-[500px] h-[350px] overflow-hidden rounded-xl shadow-2xl hidden md:block">

      {/* Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="slide"
            className="w-[500px] h-[350px] object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-6">

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-yellow-400 hover:text-black transition text-white"
        >
          ←
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-yellow-400 hover:text-black transition text-white"
        >
          →
        </button>

      </div>
    </div>
  );
};

export default ImageCarousel;