
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import MusicRelease from "@/components/projects/MusicRelease";

const Projects = () => {
  // Filter states
  const [activeType, setActiveType] = useState<string>("all");

  // Mock data for music releases
  const releases = [
    {
      id: 1,
      title: "GOAT Mode",
      artist: "Raftaar",
      type: "Album",
      releaseDate: "May 18, 2025",
      image: "/images/raftaar-goat-mode.jpg",
      path: "/projects/goat-mode",
      embedUrl: "https://open.spotify.com/embed/album/5LhTec3c7dcqBvpLRWxMcf?utm_source=generator",
    },
    {
      id: 2,
      title: "Still Here",
      artist: "KR$NA",
      type: "Single",
      releaseDate: "May 10, 2025",
      image: "/images/krsna-still-here.jpg",
      path: "/projects/still-here",
    },
    {
      id: 3,
      title: "Sab Chahiye",
      artist: "Seedhe Maut",
      type: "EP",
      releaseDate: "May 5, 2025",
      image: "/images/seedhe-maut-sab-chahiye.jpg",
      path: "/projects/sab-chahiye",
    },
    {
      id: 4,
      title: "Namastute",
      artist: "Brodha V",
      type: "Single",
      releaseDate: "May 1, 2025",
      image: "/images/brodha-v-namastute.jpg",
      path: "/projects/namastute",
    },
    {
      id: 5,
      title: "Ayo Kalakaar",
      artist: "EPR",
      type: "EP",
      releaseDate: "April 25, 2025",
      image: "/images/epr-ayo-kalakaar.jpg",
      path: "/projects/ayo-kalakaar",
    },
    {
      id: 6,
      title: "Kohinoor",
      artist: "DIVINE",
      type: "Album",
      releaseDate: "April 15, 2025",
      image: "/images/divine-kohinoor.jpg",
      path: "/projects/kohinoor",
    },
    {
      id: 7,
      title: "Tabia",
      artist: "Prabh Deep",
      type: "Album",
      releaseDate: "April 5, 2025",
      image: "/images/prabh-deep-tabia.jpg",
      path: "/projects/tabia",
    },
    {
      id: 8,
      title: "Tadipaar",
      artist: "MC Stan",
      type: "Album",
      releaseDate: "March 28, 2025",
      image: "/images/mc-stan-tadipaar.jpg",
      path: "/projects/tadipaar",
    },
  ];

  // Filter releases based on active type
  const filteredReleases = activeType === "all" 
    ? releases 
    : releases.filter(release => release.type.toLowerCase() === activeType.toLowerCase());

  const types = ["all", "album", "ep", "single"];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Projects</h1>
          <p className="text-hiphop-muted max-w-2xl">
            Explore the newest music releases from Indian hip-hop artists, from full-length albums to singles and EPs.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap gap-2 mb-8">
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

        {/* Display releases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReleases.map((release, index) => (
            <MusicRelease 
              key={release.id} 
              release={release}
              featured={index === 0 && activeType === "all"} 
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
