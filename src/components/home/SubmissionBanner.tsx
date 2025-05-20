
import { Link } from "react-router-dom";
import { Mic } from "lucide-react";

const SubmissionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-hiphop-primary/20 to-hiphop-secondary/20 backdrop-blur-md py-16 my-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0 lg:mr-8 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Are You the Next Voice of Indian Hip-Hop?
            </h2>
            <p className="text-hiphop-light text-lg max-w-2xl">
              Submit your tracks to DesiBeats and get discovered. We're always on the lookout for fresh talent to feature on our platform.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/newcomers"
              className="btn-primary text-center py-3 px-8 flex items-center justify-center"
            >
              <Mic className="h-5 w-5 mr-2" />
              Submit Your Music
            </Link>
            <Link
              to="/newcomers/guidelines"
              className="bg-white/10 hover:bg-white/20 text-white py-3 px-8 rounded-md transition-all text-center"
            >
              Read Guidelines
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionBanner;
