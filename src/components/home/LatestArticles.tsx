
import { Link } from "react-router-dom";
import { ChevronRight, Calendar } from "lucide-react";

const LatestArticles = () => {
  // Mock data for latest articles
  const articles = [
    {
      id: 1,
      title: "The Evolution of Desi Hip-Hop: From Streets to Mainstream",
      excerpt: "Exploring how Indian hip-hop grew from underground movement to pop culture phenomenon...",
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
      date: "May 8, 2025",
      author: "Arjun Mehta",
      category: "Lists",
      image: "/images/top-10-albums.jpg",
      path: "/blog/top-10-albums",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-title">Latest Articles</h2>
        <Link 
          to="/blog"
          className="text-hiphop-primary hover:text-hiphop-primary/80 flex items-center transition-colors"
        >
          View All Articles <ChevronRight className="h-5 w-5 ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
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
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-hiphop-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-hiphop-muted text-sm mb-4 flex-grow">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-xs text-hiphop-muted mt-auto">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {article.author}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
