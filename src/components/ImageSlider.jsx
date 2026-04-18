import { useState } from "react";

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative">

      {/* Image */}
      <img
        src={images[current]}
        alt=""
        className="w-full h-100 object-cover rounded-xl"
      />

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-yellow-400 transition"
      >
        {'<'}
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-yellow-400 transition"
      >
        {'>'}
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === current ? "bg-yellow-400" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default ImageSlider;