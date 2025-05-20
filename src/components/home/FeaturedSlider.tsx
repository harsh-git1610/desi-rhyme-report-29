
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, Play } from "lucide-react";

// Mock data for featured releases
const featuredReleases = [
  {
    id: 1,
    title: "Kohinoor",
    artist: "DIVINE",
    image: "/images/divine-kohinoor.jpg",
    path: "/projects/kohinoor",
    description: "The groundbreaking album that showcases Mumbai's gully rap at its finest"
  },
  {
    id: 2,
    title: "Tabia",
    artist: "Prabh Deep",
    image: "/images/prabh-deep-tabia.jpg",
    path: "/projects/tabia",
    description: "A psychedelic journey through Delhi's streets and life experiences"
  },
  {
    id: 3,
    title: "Sab chahiye",
    artist: "Seedhe Maut",
    image: "/images/seedhe-maut-sab-chahiye.jpg",
    path: "/projects/sab-chahiye",
    description: "Raw lyricism that brings the Delhi underground scene to the forefront"
  },
  {
    id: 4,
    title: "Class-Sikh",
    artist: "Prabh Deep",
    image: "/images/prabh-deep-class-sikh.jpg",
    path: "/projects/class-sikh",
    description: "A genre-defining album that revolutionized the Punjabi hip-hop sound"
  }
];

const FeaturedSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredReleases.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredReleases.length - 1 : prev - 1));
  };

  useEffect(() => {
    let interval: number | undefined;
    
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, currentSlide]);

  // Pause autoplay when user interacts
  const handleNavigation = (action: () => void) => {
    setIsAutoPlaying(false);
    action();
    
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg">
      {/* Slides */}
      <div className="relative w-full h-full">
        {featuredReleases.map((release, index) => (
          <div
            key={release.id}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Image Background with Gradient Overlay */}
            <div className="relative w-full h-full">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"
              ></div>
              <img
                src={release.image || "https://placehold.co/1200x600/1A1F2C/9b87f5?text=New+Release"}
                alt={`${release.title} by ${release.artist}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-16">
              <div className="max-w-xl animate-slide-in">
                <div className="mb-2 inline-block bg-hiphop-primary px-2 py-1 text-xs font-medium text-white rounded">
                  NEW RELEASE
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                  {release.title}
                </h2>
                <h3 className="text-xl md:text-2xl font-medium text-hiphop-primary mb-4">
                  {release.artist}
                </h3>
                <p className="text-hiphop-light mb-6 max-w-lg">
                  {release.description}
                </p>
                <div className="flex space-x-4">
                  <Link
                    to={release.path}
                    className="bg-hiphop-primary hover:bg-hiphop-primary/80 text-white px-6 py-3 rounded-md flex items-center space-x-2 transition-all"
                  >
                    <Play className="h-5 w-5" />
                    <span>Listen Now</span>
                  </Link>
                  <Link
                    to={`/artists/${release.artist.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md transition-all"
                  >
                    View Artist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={() => handleNavigation(prevSlide)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => handleNavigation(nextSlide)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {featuredReleases.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-hiphop-primary w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSlider;
