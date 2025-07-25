import FAQ from "../components/FAQ";
import FeaturedDrivers from "../components/FeaturedDrivers";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import { sanityClient } from "@/lib/sanity";
import { HOMEPAGE_QUERY } from "@/lib/queries";
import HirePlansSection from "../components/HirePlansSection";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton";

export const metadata = {
  title: "Hire Verified Lagos Drivers | Lagos Drivers Link",
  description:
    "LagosDriversLink connects you with pre-vetted professional drivers for corporate, logistics, and private use across Lagos. Safe. Reliable. Experienced.",
  keywords: [
    "lagos drivers",
    "hire a driver in nigeria",
    "professional chauffeurs",
    "logistics drivers lagos",
    "trusted drivers nigeria",
  ],
  openGraph: {
    title: "Lagos Drivers Link",
    description:
      "Hire verified Lagos drivers for your business or personal needs.",
    url: "https://lagosdriverslink.com",
    siteName: "Lagos Drivers Link",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/ldl_logo.png",
        width: 1200,
        height: 630,
        alt: "Lagos Drivers Link",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagos Drivers Link",
    description:
      "Hire trusted Lagos drivers instantly for corporate and personal needs.",
    images: ["/og-banner.png"],
  },
};

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
      <HirePlansSection />
      <Testimonials />
      <FAQ />
      <WhatsAppFloatingButton />
    </div>
  );
}
