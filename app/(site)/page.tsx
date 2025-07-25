// pages/index.tsx
import FAQ from "../components/FAQ";
import FeaturedDrivers from "../components/FeaturedDrivers";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import { sanityClient } from "@/lib/sanity";
import { HOMEPAGE_QUERY } from "@/lib/queries";
import HirePlansSection from "../components/HirePlansSection";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton";
import Head from "next/head";
import { HomepageData } from "@/types/homepage"; // Adjust path based on where you save the type

// Base URL for absolute image URLs
const BASE_URL = process.env.NEXTAUTH_URL || "https://lagosdriverslink.com";

export default async function HomePage() {
  let data: HomepageData | null = null;

  try {
    data = await sanityClient.fetch(HOMEPAGE_QUERY);
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }

  if (!data) {
    return (
      <div>
        <h1>Error: Unable to load homepage content</h1>
        <p>Please try again later or contact support.</p>
      </div>
    );
  }

  const metadata = {
    title: data.heroTitle || "Hire Verified Lagos Drivers | Lagos Drivers Link",
    description:
      data.heroSubtitle ||
      "LagosDriversLink connects you with pre-vetted professional drivers for corporate, logistics, and private use across Lagos. Safe. Reliable. Experienced.",
    keywords: [
      "lagos drivers",
      "hire a driver in nigeria",
      "professional chauffeurs",
      "logistics drivers lagos",
      "trusted drivers nigeria",
    ],
    canonical: `${BASE_URL}/`,
    image: data.heroImage?.asset?.url ?? `${BASE_URL}/ldl_logo.png`,
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Driver Hire Service",
    provider: {
      "@type": "Organization",
      name: "Lagos Drivers Link",
      url: BASE_URL,
      logo: `${BASE_URL}/ldl_logo.png`,
    },
    areaServed: {
      "@type": "Place",
      name: "Lagos, Nigeria",
    },
    description: metadata.description,
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={metadata.canonical} />
        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.canonical} />
        <meta property="og:site_name" content="Lagos Drivers Link" />
        <meta property="og:locale" content="en_NG" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Lagos Drivers Link" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

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
    </>
  );
}
