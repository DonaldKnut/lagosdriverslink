// pages/index.tsx
import FAQ from "../components/FAQ";
import FeaturedDrivers from "../components/FeaturedDrivers";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import { sanityClient } from "@/lib/sanity";
import { HOMEPAGE_QUERY } from "@/lib/queries";
import HirePlansSection from "../components/HirePlansSection";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton";
import { HomepageData } from "@/types/homepage";

// Base URL for fallback image
const BASE_URL = process.env.NEXTAUTH_URL || "https://lagosdriverslink.com";

export async function getStaticProps() {
  try {
    const data: HomepageData = await sanityClient.fetch(HOMEPAGE_QUERY);

    return {
      props: { data: data || null },
      revalidate: 60, // ISR: Revalidate every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return {
      props: { data: null },
      revalidate: 60,
    };
  }
}

interface HomePageProps {
  data: HomepageData | null;
}

export default function HomePage({ data }: HomePageProps) {
  // Fallback if no data is available
  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold text-yellow-400">
          Oops, something went wrong
        </h1>
        <p className="mt-2 text-lg">
          Please try again later or contact support.
        </p>
        <a
          href="https://wa.me/1234567890"
          className="mt-4 px-6 py-3 bg-yellow-400 text-black rounded-lg"
        >
          Contact Us
        </a>
      </div>
    );
  }

  return (
    <div>
      <HeroSection
        heroTitle={data.heroTitle ?? "Hire Verified Drivers in Lagos"}
        heroSubtitle={
          data.heroSubtitle ?? "Pre-vetted professionals for all driving needs"
        }
        heroImage={data.heroImage?.asset?.url ?? `${BASE_URL}/ldl_logo.png`}
        ctaText={data.ctaText ?? "Book a Driver"}
        ctaLink={data.ctaLink ?? "/hire"}
      />
      <FeaturedDrivers />
      <HirePlansSection />
      <Testimonials />
      <FAQ />
      <WhatsAppFloatingButton />
    </div>
  );
}
