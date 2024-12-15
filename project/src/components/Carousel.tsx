import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    url: "https://images.unsplash.com/photo-1601142634808-38923eb7c560",
    title: "Sagrado Coração de Jesus"
  },
  {
    url: "https://images.unsplash.com/photo-1543341777-a817d2f12354",
    title: "Nossa Igreja"
  },
  {
    url: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7",
    title: "Comunidade"
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="h-[500px] w-full relative group mt-16">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            {slides[currentIndex].title}
          </h2>
        </div>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}