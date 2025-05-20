
import { Link } from "react-router-dom";
import { Music, Users, Play } from "lucide-react";

const WeeklyHighlights = () => {
  // Mock data for weekly highlights
  const highlights = [
    {
      id: 1,
      title: "Top Track",
      icon: <Music className="h-6 w-6 text-hiphop-primary" />,
      heading: "Ek Din Pyaar",
      subheading: "MC Stan",
      image: "/images/mc-stan-ek-din-pyaar.jpg",
      path: "/projects/ek-din-pyaar",
    },
    {
      id: 2,
      title: "Trending Artist",
      icon: <Users className="h-6 w-6 text-hiphop-secondary" />,
      heading: "Karma",
      subheading: "Delhi-based lyrical powerhouse",
      image: "/images/karma-artist.jpg",
      path: "/artists/karma",
    },
    {
      id: 3,
      title: "Music Video",
      icon: <Play className="h-6 w-6 text-hiphop-accent" />,
      heading: "3:59 AM",
      subheading: "DIVINE & Nucleya",
      image: "/images/divine-nucleya-359am.jpg",
      path: "/videos/359am",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="section-title mb-8">Weekly Highlights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((item) => (
          <Link 
            key={item.id} 
            to={item.path}
            className="group"
          >
            <div className="glass-card rounded-lg overflow-hidden card-hover">
              <div className="relative h-48">
                <img
                  src={item.image || `https://placehold.co/600x400/1A1F2C/9b87f5?text=${item.heading}`}
                  alt={item.heading}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-3 left-3 flex items-center bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                  {item.icon}
                  <span className="ml-2 text-white text-sm font-medium">{item.title}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-hiphop-primary transition-colors">
                  {item.heading}
                </h3>
                <p className="text-hiphop-muted">{item.subheading}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WeeklyHighlights;
