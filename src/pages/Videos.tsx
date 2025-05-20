import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Play, Calendar } from "lucide-react";

const Videos = () => {
  // Filter states
  const [activeType, setActiveType] = useState<string>("all");

  // Mock data for videos
  const videos = [
    {
      id: 1,
      title: "3:59 AM",
      artist: "DIVINE & Nucleya",
      type: "Music Video",
      date: "May 18, 2025",
      thumbnail: "/images/divine-nucleya-359am.jpg",
      youtubeId: "dQw4w9WgXcQ",  // Example YouTube ID
    },
    {
      id: 2,
      title: "Mumbai Cypher 2.0",
      artist: "Various Artists",
      type: "Cypher",
      date: "May 12, 2025",
      thumbnail: "/images/mumbai-cypher.jpg",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Gully Boy - Behind The Scenes",
      artist: "Ranveer Singh, DIVINE",
      type: "Documentary",
      date: "May 8, 2025",
      thumbnail: "/images/gully-boy-bts.jpg",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "Satya - EPR",
      artist: "EPR",
      type: "Music Video",
      date: "May 5, 2025",
      thumbnail: "/images/epr-satya.jpg",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 5,
      title: "Discover Delhi's Underground Hip-Hop Scene",
      artist: "DesiBeats Original",
      type: "Documentary",
      date: "April 28, 2025",
      thumbnail: "/images/delhi-hiphop-scene.jpg",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 6,
      title: "Kr$na vs Emiway: The Complete Breakdown",
      artist: "DesiBeats Original",
      type: "Analysis",
      date: "April 22, 2025",
      thumbnail: "/images/krsna-emiway-beef.jpg",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 7,
      title: "Nanchaku",
      artist: "Seedhe Maut",
      type: "Music Video",
      date: "April 18, 2025",
      thumbnail: "/images/seedhe-maut-nanchaku.jpg",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 8,
      title: "Pune Cypher",
      artist: "MC Stan, Various Artists",
      type: "Cypher",
      date: "April 15, 2025",
      thumbnail: "/images/pune-cypher.jpg",
      youtubeId: "dQw4w9WgXcQ",
    },
  ];

  // Filter videos based on active type
  const filteredVideos = activeType === "all" 
    ? videos 
    : videos.filter(video => video.type.toLowerCase() === activeType.toLowerCase());

  const types = ["all", "music video", "cypher", "documentary", "analysis"];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Videos</h1>
          <p className="text-hiphop-muted max-w-2xl">
            Watch the latest music videos, cyphers, documentaries, and more from the Indian hip-hop scene.
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

        {/* Featured video (first one) */}
        {filteredVideos.length > 0 && (
          <div className="mb-12">
            <div className="glass-card rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <iframe
                  src={`https://www.youtube.com/embed/${filteredVideos[0].youtubeId}`}
                  title={`${filteredVideos[0].title} by ${filteredVideos[0].artist}`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-hiphop-muted mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{filteredVideos[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{filteredVideos[0].type}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {filteredVideos[0].title}
                </h2>
                <p className="text-hiphop-muted">
                  {filteredVideos[0].artist}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Rest of the videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.slice(1).map((video) => (
            <div key={video.id} className="glass-card rounded-lg overflow-hidden card-hover">
              <div className="relative">
                <div className="aspect-video">
                  <img
                    src={video.thumbnail || `https://placehold.co/600x400/1A1F2C/9b87f5?text=Video`}
                    alt={`${video.title} by ${video.artist}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-hiphop-primary/90 rounded-full p-3 transform hover:scale-110 transition-transform"
                  >
                    <Play className="h-8 w-8 text-white" />
                  </a>
                </div>
                
                {/* Video type badge */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-medium">{video.type}</span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center text-xs text-hiphop-muted mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{video.date}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-hiphop-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-hiphop-muted">{video.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Videos;
