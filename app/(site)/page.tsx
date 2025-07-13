import FAQ from "../components/FAQ";
import FeaturedDrivers from "../components/FeaturedDrivers";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import { sanityClient } from "@/lib/sanity";

import { HOMEPAGE_QUERY } from "@/lib/queries";

export default async function HomePage() {
  const data = await sanityClient.fetch(HOMEPAGE_QUERY);

  if (!data) {
    return <div>No homepage data found.</div>;
  }

  return (
    <div>
      <HeroSection
        heroTitle={data.heroTitle}
        heroSubtitle={data.heroSubtitle}
        heroImage={data.heroImage.asset.url}
        ctaText={data.ctaText}
        ctaLink={data.ctaLink}
      />
      <FeaturedDrivers />
      <Testimonials />
      <FAQ />
    </div>
  );
}
