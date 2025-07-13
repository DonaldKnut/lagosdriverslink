/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        // Optionally, you can add these:
        port: "",
        pathname: "/images/**",
      },
    ],
    // domains: ['cdn.sanity.io'], // Older method (still works but remotePatterns is preferred)
  },
};

module.exports = nextConfig;
