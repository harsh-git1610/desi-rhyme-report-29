
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ArtistCard from "@/components/artists/ArtistCard";

const Artists = () => {
  // Filter states
  const [activeType, setActiveType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Mock data for artists
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
    {
      id: 7,
      name: "Raftaar",
      type: "Established",
      image: "/images/raftaar-artist.jpg",
      path: "/artists/raftaar",
      location: "Delhi",
    },
    {
      id: 8,
      name: "KR$NA",
      type: "Established",
      image: "/images/krsna-artist.jpg",
      path: "/artists/krsna",
      location: "Delhi",
    },
    {
      id: 9,
      name: "Brodha V",
      type: "Established",
      image: "/images/brodha-v-artist.jpg",
      path: "/artists/brodha-v",
      location: "Bengaluru",
    },
    {
      id: 10,
      name: "Yashraj",
      type: "Upcoming",
      image: "/images/yashraj-artist.jpg",
      path: "/artists/yashraj",
      location: "Mumbai",
    },
    {
      id: 11,
      name: "Dakait",
      type: "Upcoming",
      image: "/images/dakait-artist.jpg",
      path: "/artists/dakait",
      location: "Delhi",
    },
    {
      id: 12,
      name: "Raga",
      type: "Established",
      image: "/images/raga-artist.jpg",
      path: "/artists/raga",
      location: "Delhi",
    },
  ];

  // Filter and search artists
  const filteredArtists = artists
    .filter(artist => 
      activeType === "all" || artist.type.toLowerCase() === activeType.toLowerCase()
    )
    .filter(artist => 
      artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.location?.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const types = ["all", "established", "trending", "upcoming"];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Artist Directory</h1>
          <p className="text-hiphop-muted max-w-2xl">
            Discover established Indian hip-hop artists, trending names, and upcoming talents all in one place.
          </p>
        </div>

        {/* Search and filter controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search artists by name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-hiphop-primary"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeType === type
                    ? "bg-hiphop-primary text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                } transition-colors`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Display artists */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
        
        {/* No results message */}
        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-hiphop-muted text-lg">No artists found matching your search.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Artists;
