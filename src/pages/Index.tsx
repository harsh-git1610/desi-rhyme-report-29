
import Layout from "@/components/layout/Layout";
import FeaturedSlider from "@/components/home/FeaturedSlider";
import WeeklyHighlights from "@/components/home/WeeklyHighlights";
import NewReleases from "@/components/home/NewReleases";
import FeaturedArtists from "@/components/home/FeaturedArtists";
import LatestArticles from "@/components/home/LatestArticles";
import SubmissionBanner from "@/components/home/SubmissionBanner";

const Index = () => {
  return (
    <Layout>
      <div className="pb-12">
        {/* Hero Section with Featured Slider */}
        <section className="container mx-auto px-4 py-6">
          <FeaturedSlider />
        </section>

        {/* Weekly Highlights */}
        <WeeklyHighlights />

        {/* New Music Releases */}
        <NewReleases />

        {/* Featured Artists */}
        <FeaturedArtists />

        {/* Submit Music Banner */}
        <SubmissionBanner />

        {/* Latest Articles */}
        <LatestArticles />
      </div>
    </Layout>
  );
};

export default Index;
