
import { Link } from "react-router-dom";
import { Headphones } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Headphones className="h-6 w-6 text-hiphop-primary" />
              <span className="font-heading text-xl font-bold text-white">
                Desi<span className="text-hiphop-primary">Beats</span>
              </span>
            </Link>
            <p className="text-hiphop-muted text-sm">
              Your complete Indian hip-hop destination featuring the latest
              projects, artist info, newcomers, music, videos, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-hiphop-muted hover:text-hiphop-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="text-hiphop-muted hover:text-hiphop-primary transition-colors"
                >
                  Latest Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/artists" 
                  className="text-hiphop-muted hover:text-hiphop-primary transition-colors"
                >
                  Artists
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-hiphop-muted hover:text-hiphop-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/newcomers" 
                  className="text-hiphop-muted hover:text-hiphop-primary transition-colors"
                >
                  Submit Your Music
                </Link>
              </li>
              <li>
                <Link 
                  to="/videos" 
                  className="text-hiphop-muted hover:text-hiphop-primary transition-colors"
                >
                  Videos
                </Link>
              </li>
              <li>
                <Link 
                  to="/events" 
                  className="text-hiphop-muted hover:text-hiphop-primary transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-hiphop-muted hover:text-hiphop-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-4">Stay Updated</h3>
            <p className="text-hiphop-muted text-sm mb-4">
              Subscribe to our newsletter for the latest updates on Indian hip-hop.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/20 rounded px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-hiphop-primary"
              />
              <button 
                type="submit" 
                className="btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-hiphop-muted text-sm">
            © {new Date().getFullYear()} DesiBeats. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-hiphop-muted hover:text-hiphop-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-hiphop-muted hover:text-hiphop-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
