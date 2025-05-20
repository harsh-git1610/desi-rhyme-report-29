
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ArtistCard from "../artists/ArtistCard";

const FeaturedArtists = () => {
  // Mock data for featured artists
  const artists = [
    {
      id: 1,
      name: "DIVINE",
      type: "Established",
      image: "/images/divine-artist.jpg",
      path: "/artists/divine",
      location: "Mumbai",
    },
    {
      id: 2,
      name: "Prabh Deep",
      type: "Established",
      image: "/images/prabh-deep-artist.jpg",
      path: "/artists/prabh-deep",
      location: "Delhi",
    },
    {
      id: 3,
      name: "MC Stan",
      type: "Trending",
      image: "/images/mc-stan-artist.jpg",
      path: "/artists/mc-stan",
      location: "Pune",
    },
    {
      id: 4,
      name: "Seedhe Maut",
      type: "Established",
      image: "/images/seedhe-maut-artist.jpg",
      path: "/artists/seedhe-maut",
      location: "Delhi",
    },
    {
      id: 5,
      name: "Karma",
      type: "Trending",
      image: "/images/karma-artist.jpg",
      path: "/artists/karma",
      location: "Delhi",
    },
    {
      id: 6,
      name: "EPR",
      type: "Established",
      image: "/images/epr-artist.jpg",
      path: "/artists/epr",
      location: "Mumbai",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-title">Featured Artists</h2>
        <Link 
          to="/artists"
          className="text-hiphop-primary hover:text-hiphop-primary/80 flex items-center transition-colors"
        >
          View All Artists <ChevronRight className="h-5 w-5 ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedArtists;
