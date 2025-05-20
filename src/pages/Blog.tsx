import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Calendar } from "lucide-react";

const Blog = () => {
  // Filter states
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Mock data for blog articles
  const articles = [
    {
      id: 1,
      title: "The Evolution of Desi Hip-Hop: From Streets to Mainstream",
      excerpt: "Exploring how Indian hip-hop grew from underground movement to pop culture phenomenon...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "May 15, 2025",
      author: "Rahul Sharma",
      category: "Scene Analysis",
      image: "/images/desi-hiphop-evolution.jpg",
      path: "/blog/evolution-of-desi-hiphop",
    },
    {
      id: 2,
      title: "Interview: Seedhe Maut on Their New Album and Future Plans",
      excerpt: "Delhi's dynamic duo talks about their creative process, inspirations and the future of Indian hip-hop...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "May 12, 2025",
      author: "Priya Singh",
      category: "Interviews",
      image: "/images/seedhe-maut-interview.jpg",
      path: "/blog/interview-seedhe-maut",
    },
    {
      id: 3,
      title: "Top 10 Indian Hip-Hop Albums That Defined a Generation",
      excerpt: "A countdown of the most influential Indian hip-hop albums that shaped the sound and culture...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "May 8, 2025",
      author: "Arjun Mehta",
      category: "Lists",
      image: "/images/top-10-albums.jpg",
      path: "/blog/top-10-albums",
    },
    {
      id: 4,
      title: "The Rise of Multilingual Rap in India",
      excerpt: "How artists are breaking language barriers and creating unique sounds by mixing languages...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "May 5, 2025",
      author: "Vikram Patel",
      category: "Scene Analysis",
      image: "/images/multilingual-rap.jpg",
      path: "/blog/multilingual-rap",
    },
    {
      id: 5,
      title: "Hip-Hop Dance Forms Gaining Popularity in India",
      excerpt: "From b-boying to krumping, these dance styles are becoming integral to the hip-hop culture...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "May 1, 2025",
      author: "Neha Gupta",
      category: "Culture",
      image: "/images/hiphop-dance.jpg",
      path: "/blog/hiphop-dance",
    },
    {
      id: 6,
      title: "Interview: MC Stan Talks About His Journey and Inspiration",
      excerpt: "The Pune-based artist opens up about his rise to fame and creative influences...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "April 28, 2025",
      author: "Priya Singh",
      category: "Interviews",
      image: "/images/mc-stan-interview.jpg",
      path: "/blog/interview-mc-stan",
    },
  ];

  // Filter articles based on active category
  const filteredArticles = activeCategory === "all" 
    ? articles 
    : articles.filter(article => article.category.toLowerCase() === activeCategory.toLowerCase());

  const categories = ["all", "scene analysis", "interviews", "lists", "culture"];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Blog & Articles</h1>
          <p className="text-hiphop-muted max-w-2xl">
            Dive deep into Indian hip-hop culture with our exclusive articles, interviews, and analyses.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeCategory === category
                  ? "bg-hiphop-primary text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              } transition-colors`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Featured article (first one) */}
        {filteredArticles.length > 0 && (
          <div className="mb-12">
            <Link
              to={filteredArticles[0].path}
              className="group"
            >
              <div className="glass-card rounded-lg overflow-hidden card-hover">
                <div className="flex flex-col lg:flex-row">
                  <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
                    <img
                      src={filteredArticles[0].image || `https://placehold.co/800x500/1A1F2C/9b87f5?text=Article`}
                      alt={filteredArticles[0].title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute top-3 left-3 bg-hiphop-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                      {filteredArticles[0].category}
                    </div>
                  </div>
                  
                  <div className="p-6 lg:p-8 w-full lg:w-1/2">
                    <div className="flex items-center text-xs text-hiphop-muted mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{filteredArticles[0].date}</span>
                      <span className="mx-2">•</span>
                      <span>By {filteredArticles[0].author}</span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-hiphop-primary transition-colors">
                      {filteredArticles[0].title}
                    </h2>
                    
                    <p className="text-hiphop-muted mb-6">
                      {filteredArticles[0].content}
                    </p>
                    
                    <button className="btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Rest of the articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.slice(1).map((article) => (
            <Link
              key={article.id}
              to={article.path}
              className="group"
            >
              <article className="glass-card rounded-lg overflow-hidden h-full card-hover flex flex-col">
                <div className="relative h-48">
                  <img
                    src={article.image || `https://placehold.co/600x400/1A1F2C/9b87f5?text=Article`}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-3 left-3 bg-hiphop-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-center text-xs text-hiphop-muted mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>By {article.author}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-hiphop-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-hiphop-muted text-sm mb-4 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <span className="text-hiphop-primary text-sm font-medium group-hover:underline">
                    Read More
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
