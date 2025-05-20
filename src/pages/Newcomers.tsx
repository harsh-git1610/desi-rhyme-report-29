
import Layout from "@/components/layout/Layout";
import { Microphone, ChevronRight, Users, Image } from "lucide-react";

const Newcomers = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Newcomer Zone</h1>
          <p className="text-hiphop-muted text-lg">
            Your gateway to the Indian hip-hop scene. Submit your music for a chance to be featured on DesiBeats and get discovered.
          </p>
        </div>

        {/* Submission Form */}
        <div className="glass-card rounded-lg p-6 md:p-8 max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Submit Your Music</h2>
          
          <form className="space-y-6">
            {/* Artist Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="h-5 w-5 mr-2 text-hiphop-primary" />
                Artist Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="artistName" className="block text-white text-sm mb-2">
                    Artist/Group Name *
                  </label>
                  <input
                    type="text"
                    id="artistName"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-hiphop-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-white text-sm mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    required
                    placeholder="City, State"
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-hiphop-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white text-sm mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-hiphop-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="socialMedia" className="block text-white text-sm mb-2">
                    Social Media Handle
                  </label>
                  <input
                    type="text"
                    id="socialMedia"
                    placeholder="Instagram, Twitter, etc."
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-hiphop-primary"
                  />
                </div>
              </div>
            </div>
            
            {/* Music Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Microphone className="h-5 w-5 mr-2 text-hiphop-primary" />
                Music Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="trackTitle" className="block text-white text-sm mb-2">
                    Track Title *
                  </label>
                  <input
                    type="text"
                    id="trackTitle"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-hiphop-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="genre" className="block text-white text-sm mb-2">
                    Genre/Style *
                  </label>
                  <select
                    id="genre"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-hiphop-primary"
                  >
                    <option value="" disabled selected className="bg-hiphop-dark">Select Genre</option>
                    <option value="Gully Rap" className="bg-hiphop-dark">Gully Rap</option>
                    <option value="Boom Bap" className="bg-hiphop-dark">Boom Bap</option>
                    <option value="Trap" className="bg-hiphop-dark">Trap</option>
                    <option value="Conscious" className="bg-hiphop-dark">Conscious Hip-Hop</option>
                    <option value="Drill" className="bg-hiphop-dark">Drill</option>
                    <option value="Other" className="bg-hiphop-dark">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="musicLink" className="block text-white text-sm mb-2">
                  Music Link (SoundCloud, YouTube, etc.) *
                </label>
                <input
                  type="url"
                  id="musicLink"
                  required
                  placeholder="https://"
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-hiphop-primary"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-white text-sm mb-2">
                  Description/Background (Tell us about your track)
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-hiphop-primary"
                ></textarea>
              </div>
            </div>
            
            {/* Artist Image */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Image className="h-5 w-5 mr-2 text-hiphop-primary" />
                Artist Image
              </h3>
              
              <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <Image className="h-12 w-12 text-hiphop-muted" />
                  </div>
                  <p className="text-hiphop-muted">
                    Drag and drop an image or <span className="text-hiphop-primary">browse</span>
                  </p>
                  <p className="text-hiphop-muted text-xs">
                    Recommended: 800x800px or larger, JPG or PNG format
                  </p>
                  <input
                    type="file"
                    id="artistImage"
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => document.getElementById('artistImage')?.click()}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors inline-block"
                  >
                    Select File
                  </button>
                </div>
              </div>
            </div>
            
            {/* Terms & Submit */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-hiphop-muted text-sm">
                  I confirm that I own or have the rights to this music and agree to the <a href="#" className="text-hiphop-primary">terms and conditions</a>.
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-hiphop-primary hover:bg-hiphop-primary/80 text-white py-3 rounded-md transition-all"
              >
                Submit Your Music
              </button>
            </div>
          </form>
        </div>
        
        {/* Featured Newcomers */}
        <div className="mb-12">
          <h2 className="section-title mb-8">Featured Newcomers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* This would be populated with actual newcomer artists */}
            <div className="glass-card rounded-lg overflow-hidden card-hover">
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">Check Back Soon!</h3>
                <p className="text-hiphop-muted">
                  Our team is reviewing submissions. Submit your music to be featured here.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Guidelines */}
        <div className="glass-card rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Submission Guidelines</h2>
          
          <ul className="space-y-4 text-hiphop-light">
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-hiphop-primary mt-0.5 mr-2 flex-shrink-0" />
              <span>All genres of hip-hop are welcome, but content must be relevant to the Indian hip-hop scene.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-hiphop-primary mt-0.5 mr-2 flex-shrink-0" />
              <span>Submissions must be original work. We do not accept covers or remixes without proper licensing.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-hiphop-primary mt-0.5 mr-2 flex-shrink-0" />
              <span>We review all submissions but cannot guarantee that every track will be featured.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-hiphop-primary mt-0.5 mr-2 flex-shrink-0" />
              <span>Our team typically responds within 7-14 days. Please do not submit the same track multiple times.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-hiphop-primary mt-0.5 mr-2 flex-shrink-0" />
              <span>Selected artists may be contacted for interviews or additional promotional opportunities.</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Newcomers;
