
import { Link } from "react-router-dom";

interface ArtistCardProps {
  artist: {
    id: number;
    name: string;
    type: string;
    image: string;
    path: string;
    location?: string;
  };
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <Link
      to={artist.path}
      className="group"
    >
      <div className="glass-card rounded-lg overflow-hidden card-hover text-center">
        <div className="relative">
          <div className="pt-5 px-5">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-hiphop-primary/50 p-1">
              <img
                src={artist.image || `https://placehold.co/300x300/1A1F2C/9b87f5?text=${artist.name[0]}`}
                alt={artist.name}
                className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full">
            <span className="text-white text-xs font-medium">{artist.type}</span>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-hiphop-primary transition-colors">
            {artist.name}
          </h3>
          {artist.location && (
            <p className="text-hiphop-muted text-sm">{artist.location}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;
