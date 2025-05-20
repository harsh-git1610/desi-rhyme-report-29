
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import MusicRelease from "../projects/MusicRelease";

const NewReleases = () => {
  // Mock data for new releases
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
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gradient-to-b from-hiphop-dark to-black/80">
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-title">New Releases</h2>
        <Link 
          to="/projects"
          className="text-hiphop-primary hover:text-hiphop-primary/80 flex items-center transition-colors"
        >
          View All Releases <ChevronRight className="h-5 w-5 ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Featured Release */}
        <MusicRelease release={releases[0]} featured={true} />
        
        {/* Regular Releases */}
        {releases.slice(1, 5).map((release) => (
          <MusicRelease key={release.id} release={release} />
        ))}
      </div>
    </section>
  );
};

export default NewReleases;
