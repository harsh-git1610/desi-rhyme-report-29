
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Music, Headphones } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Headphones className="h-7 w-7 text-hiphop-primary" />
            <span className="font-heading text-xl md:text-2xl font-bold text-white">
              Desi<span className="text-hiphop-primary">Beats</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-hiphop-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-white hover:text-hiphop-primary transition-colors"
            >
              Latest Projects
            </Link>
            <Link
              to="/artists"
              className="text-white hover:text-hiphop-primary transition-colors"
            >
              Artists
            </Link>
            <Link
              to="/newcomers"
              className="text-white hover:text-hiphop-primary transition-colors"
            >
              Newcomers
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-hiphop-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/videos"
              className="bg-hiphop-primary px-4 py-2 rounded-md text-white hover:bg-hiphop-primary/80 transition-colors"
            >
              Videos
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white hover:text-hiphop-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="text-white hover:text-hiphop-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Latest Projects
              </Link>
              <Link
                to="/artists"
                className="text-white hover:text-hiphop-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Artists
              </Link>
              <Link
                to="/newcomers"
                className="text-white hover:text-hiphop-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Newcomers
              </Link>
              <Link
                to="/blog"
                className="text-white hover:text-hiphop-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                to="/videos"
                className="bg-hiphop-primary px-4 py-2 rounded-md text-white hover:bg-hiphop-primary/80 transition-colors inline-block"
                onClick={toggleMenu}
              >
                Videos
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
