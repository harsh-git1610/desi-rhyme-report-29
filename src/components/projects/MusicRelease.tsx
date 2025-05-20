
import { Link } from "react-router-dom";
import { Music, Play, Calendar } from "lucide-react";

interface MusicReleaseProps {
  release: {
    id: number;
    title: string;
    artist: string;
    type: string;
    releaseDate: string;
    image: string;
    path: string;
    embedUrl?: string;
  };
  featured?: boolean;
}

const MusicRelease = ({ release, featured = false }: MusicReleaseProps) => {
  return (
    <div className={`glass-card rounded-lg overflow-hidden card-hover ${featured ? 'col-span-full' : ''}`}>
      <div className={`flex ${featured ? 'flex-col md:flex-row' : 'flex-col'}`}>
        <div className={`relative ${featured ? 'w-full md:w-1/2' : 'w-full'} ${featured ? 'h-64 md:h-auto' : 'h-48'}`}>
          <img
            src={release.image || `https://placehold.co/600x600/1A1F2C/9b87f5?text=${release.title}`}
            alt={`${release.title} by ${release.artist}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-hiphop-primary/90 rounded-full p-3 transform hover:scale-110 transition-transform">
              <Play className="h-8 w-8 text-white" />
            </div>
          </div>
          
          {/* Release type badge */}
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
            <Music className="h-4 w-4 text-hiphop-primary mr-1" />
            <span className="text-white text-xs font-medium">{release.type}</span>
          </div>
          
          {featured && (
            <div className="absolute top-3 right-3 bg-hiphop-secondary px-3 py-1 rounded-full">
              <span className="text-white text-xs font-bold">FEATURED</span>
            </div>
          )}
        </div>
        
        <div className={`p-5 ${featured ? 'w-full md:w-1/2' : 'w-full'}`}>
          <div className="flex items-center text-xs text-hiphop-muted mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{release.releaseDate}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-hiphop-primary transition-colors">
            {release.title}
          </h3>
          <p className="text-hiphop-muted mb-4">{release.artist}</p>
          
          {featured && release.embedUrl && (
            <div className="mb-4">
              <iframe
                src={release.embedUrl}
                title={`${release.title} by ${release.artist}`}
                className="w-full h-28 rounded-md"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          )}
          
          <div className="flex space-x-3">
            <Link
              to={release.path}
              className="btn-primary"
            >
              Listen Now
            </Link>
            <Link
              to={`/artists/${release.artist.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-all"
            >
              View Artist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicRelease;
